const TARGET_URL = 'https://stagingcrm.scotsenglish.edu.vn/index.php#Home';
const USERNAME = Cypress.env('CRM_USERNAME') || 'anhtt@scotsenglish.com';
const PASSWORD = Cypress.env('CRM_PASSWORD') || 'Tienanh23997@';
const MAX_PAGES = Number(Cypress.env('MAX_PAGES') || 25);
const OUTPUT_JSON = 'docs/selector-library.json';
const OUTPUT_MD = 'docs/selector-library.md';

function cssEscape(value) {
  if (!value) return '';
  return String(value).replace(/([ #;?%&,.+*~\':"!^$\[\]()=>|/@])/g, '\\$1');
}

function textNorm(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function attrMap(el) {
  const out = {};
  for (const attr of Array.from(el.attributes || [])) out[attr.name] = attr.value;
  return out;
}

function stableClasses(className) {
  return String(className || '')
    .split(/\s+/)
    .map(s => s.trim())
    .filter(Boolean)
    .filter(s => !/^(active|show|open|selected|focus|hover|disabled|ng-|css-|jsx-|ant-|Mui|chakra-)/i.test(s))
    .filter(s => !/^[a-z0-9]{1,4}-[a-z0-9]{4,}$/i.test(s))
    .slice(0, 3);
}

function buildCandidates(el, attrs) {
  const tag = (el.tagName || '').toLowerCase();
  const role = attrs.role || '';
  const name = attrs.name || '';
  const id = attrs.id || '';
  const placeholder = attrs.placeholder || '';
  const href = attrs.href || '';
  const type = attrs.type || '';
  const aria = attrs['aria-label'] || '';
  const text = textNorm(el.innerText || el.textContent || '').slice(0, 80);
  const candidates = [];
  ['data-cy', 'data-testid', 'data-test', 'data-qa'].forEach(key => attrs[key] && candidates.push(`[${key}="${attrs[key]}"]`));
  if (id) candidates.push(`#${cssEscape(id)}`);
  if (name) candidates.push(`${tag}[name="${name}"]`);
  if (role) candidates.push(`${tag}[role="${role}"]`);
  if (aria) candidates.push(`${tag}[aria-label="${aria}"]`);
  if (placeholder) candidates.push(`${tag}[placeholder="${placeholder}"]`);
  if (href && href !== '#') candidates.push(`${tag}[href="${href}"]`);
  if (type) candidates.push(`${tag}[type="${type}"]`);
  for (const cls of stableClasses(attrs.class || '')) candidates.push(`${tag}.${cssEscape(cls)}`);
  if (text && ['button', 'a', 'label', 'span', 'div'].includes(tag)) candidates.push(`${tag}:contains("${text}")`);
  return Array.from(new Set(candidates)).slice(0, 8);
}

function getElementKind(el, attrs) {
  const tag = (el.tagName || '').toLowerCase();
  const role = attrs.role || '';
  if (role === 'dialog') return 'dialog';
  if (tag === 'input' || tag === 'textarea' || tag === 'select') return 'form-field';
  if (tag === 'button' || role === 'button') return 'button';
  if (role === 'tab') return 'tab';
  if (tag === 'th') return 'table-header';
  if (tag === 'a' || role === 'menuitem') return 'link-or-menu';
  if (/sidebar|sidemenu/i.test(attrs.class || '')) return 'sidebar';
  if (/breadcrumb/i.test(attrs.class || '') || role === 'navigation') return 'navigation';
  return tag || 'element';
}

function harvestPage(doc, sourceLabel) {
  const nodes = Array.from(doc.querySelectorAll('a, button, input, textarea, select, [role], th, label, nav, aside, form, [aria-label], [placeholder], [data-testid], [data-test], [data-cy], [data-qa]'));
  const elements = nodes.map((el, index) => {
    const attrs = attrMap(el);
    const text = textNorm(el.innerText || el.textContent || '');
    const label = attrs['aria-label'] || attrs.placeholder || attrs.title || text;
    return {
      index,
      kind: getElementKind(el, attrs),
      tag: (el.tagName || '').toLowerCase(),
      text: text.slice(0, 200),
      label: textNorm(label || '').slice(0, 200),
      role: attrs.role || '',
      name: attrs.name || '',
      id: attrs.id || '',
      class: attrs.class || '',
      type: attrs.type || '',
      href: attrs.href || '',
      placeholder: attrs.placeholder || '',
      aria: Object.fromEntries(Object.entries(attrs).filter(([k]) => k.startsWith('aria-'))),
      data: Object.fromEntries(Object.entries(attrs).filter(([k]) => k.startsWith('data-'))),
      selectors: buildCandidates(el, attrs),
      sourceLabel,
    };
  }).filter(item => item.text || item.label || item.id || item.name || item.href || item.selectors.length);

  return {
    url: doc.location.href,
    title: doc.title,
    headings: Array.from(doc.querySelectorAll('h1,h2,h3,.page-title,.module-title,[role="heading"]')).map(el => textNorm(el.textContent || '')).filter(Boolean).slice(0, 12),
    sourceLabel,
    capturedAt: new Date().toISOString(),
    elementCount: elements.length,
    elements,
  };
}

function buildMarkdown(report) {
  const lines = ['# Selector Library', '', `Generated at: ${report.generatedAt}`, `Base URL: ${report.baseUrl}`, `Pages captured: ${report.pages.length}`, `Notes: ${report.notes.join(' | ')}`, ''];
  report.pages.forEach((page, pageIndex) => {
    lines.push(`## ${pageIndex + 1}. ${page.title || page.url}`);
    lines.push(`- URL: ${page.url}`);
    if (page.headings.length) lines.push(`- Headings: ${page.headings.join(' | ')}`);
    lines.push(`- Elements captured: ${page.elementCount}`);
    lines.push('');
    lines.push('| Kind | Label/Text | Role/Type | Candidate selectors |');
    lines.push('|---|---|---|---|');
    page.elements.slice(0, 150).forEach(el => {
      const label = (el.label || el.text || '').replace(/\|/g, '\\|').slice(0, 120);
      const roleType = [el.role, el.type].filter(Boolean).join(' / ').replace(/\|/g, '\\|');
      const selectors = el.selectors.join('<br>').replace(/\|/g, '\\|');
      lines.push(`| ${el.kind} | ${label} | ${roleType} | ${selectors} |`);
    });
    lines.push('');
  });
  return lines.join('\n');
}

function firstDisplayed($els) {
  return [...$els].find(el => {
    const r = el.getBoundingClientRect();
    const style = el.ownerDocument.defaultView.getComputedStyle(el);
    return r.width > 0 && r.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
  }) || $els[0];
}

describe('CRM selector library collector', () => {
  it('logs in and harvests selectors from accessible pages', () => {
    const report = {
      generatedAt: new Date().toISOString(),
      baseUrl: TARGET_URL,
      notes: [
        'Collector only reads/navigates UI and may open menus/dialogs without submitting forms.',
        'Create/edit/delete/detail-like routes are intentionally skipped when they look risky.',
      ],
      pages: [],
      skippedRoutes: [],
      discoveredRoutes: [],
    };

    cy.on('uncaught:exception', () => false);
    cy.visit(TARGET_URL, { failOnStatusCode: false, timeout: 120000 });
    cy.get('input[name="username"]', { timeout: 120000 }).then($els => cy.wrap(firstDisplayed($els)).clear({ force: true }).type(USERNAME, { force: true, log: false }));
    cy.get('input[name="password"]', { timeout: 120000 }).then($els => cy.wrap(firstDisplayed($els)).clear({ force: true }).type(PASSWORD, { force: true, log: false }));
    cy.get('a[name="login_button"], a[role="button"], button[type="submit"], button', { timeout: 120000 }).then($els => {
      const el = firstDisplayed($els);
      el.click();
    });
    cy.contains('Create Dashboard', { timeout: 120000 }).should('exist');
    cy.wait(3000);

    cy.document().then(doc => { report.pages.push(harvestPage(doc, 'landing-post-login')); });

    cy.document().then(doc => {
      const anchors = Array.from(doc.querySelectorAll('a[href]')).map(a => ({ href: a.getAttribute('href') || '', text: textNorm(a.textContent || a.getAttribute('aria-label') || '') }));
      const seen = new Set();
      anchors.forEach(item => {
        if (!item.href || item.href.startsWith('javascript:') || item.href.startsWith('mailto:')) return;
        const absolute = new URL(item.href, TARGET_URL).href;
        if (!absolute.includes('stagingcrm.scotsenglish.edu.vn')) return;
        if (/(logout|signout|create|edit|delete|remove|update|import|export)/i.test(absolute)) {
          report.skippedRoutes.push({ reason: 'risky-route-pattern', href: absolute, text: item.text });
          return;
        }
        if (!seen.has(absolute)) {
          seen.add(absolute);
          report.discoveredRoutes.push({ url: absolute, label: item.text || absolute.split('#')[1] || absolute });
        }
      });
      report.discoveredRoutes = report.discoveredRoutes.slice(0, MAX_PAGES);
    }).then(() => {
      cy.wrap(report.discoveredRoutes).each(route => {
        cy.visit(route.url, { failOnStatusCode: false, timeout: 120000 });
        cy.wait(2000);
        cy.get('body').then($body => {
          const clickables = $body.find('[aria-haspopup="menu"],[aria-haspopup="dialog"],[role="tab"],button,[role="button"]').toArray().slice(0, 10);
          clickables.forEach(node => {
            const label = textNorm(node.innerText || node.textContent || node.getAttribute('aria-label') || '');
            if (/save|submit|create|thêm|xóa|xoá|delete|update|cập nhật/i.test(label)) return;
            try { node.click(); } catch (e) {}
          });
        });
        cy.wait(500);
        cy.get('body').type('{esc}', { force: true });
        cy.wait(500);
        cy.document().then(doc => { report.pages.push(harvestPage(doc, route.label)); });
      });
    }).then(() => {
      const pages = [];
      const seen = new Set();
      report.pages.forEach(page => {
        if (!seen.has(page.url)) {
          seen.add(page.url);
          pages.push(page);
        }
      });
      report.pages = pages;
      report.summary = report.pages.map(page => ({ url: page.url, title: page.title, headings: page.headings, elementCount: page.elementCount }));
      cy.writeFile(OUTPUT_JSON, report);
      cy.writeFile(OUTPUT_MD, buildMarkdown(report));
    });
  });
});
