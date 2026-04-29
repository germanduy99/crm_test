const TARGET_URL = 'https://stagingcrm.scotsenglish.edu.vn/index.php#Home';
const USERNAME = Cypress.env('CRM_USERNAME') || 'anhtt@scotsenglish.com';
const PASSWORD = Cypress.env('CRM_PASSWORD') || 'Tienanh23997@';
const OUTPUT_JSON = 'docs/selector-library.json';
const OUTPUT_MD = 'docs/selector-library.md';
const OUTPUT_NOTES = 'docs/selector-library-deep-notes.md';
const RUN_ID = `AUTO_OC_${Date.now()}`;

const MODULES = [
  { key: 'leads', name: 'Leads', list: '#Leads', create: '#Leads/create', idField: 'last_name', idValue: `${RUN_ID}_LEAD`, supportsCrud: true },
  { key: 'contacts', name: 'Students', list: '#Contacts', create: '#Contacts/create', idField: 'last_name', idValue: `${RUN_ID}_CONTACT`, supportsCrud: true },
  { key: 'quotes', name: 'Quotes', list: '#Quotes', create: '#Quotes/create', idField: 'name', idValue: `${RUN_ID}_QUOTE`, supportsCrud: false },
  { key: 'j_class', name: 'Classes', list: '#J_Class', create: '#J_Class/create', idField: 'name', idValue: `${RUN_ID}_CLASS`, supportsCrud: false },
  { key: 'meetings', name: 'Meetings', list: '#Meetings', create: '#Meetings/create', idField: 'name', idValue: `${RUN_ID}_MEETING`, supportsCrud: false },
  { key: 'accounts', name: 'Accounts', list: '#Accounts', create: '#Accounts/create', idField: 'name', idValue: `${RUN_ID}_ACCOUNT`, supportsCrud: true },
  { key: 'teachers', name: 'Teachers', list: '#C_Teachers', create: '#bwc/index.php?module=C_Teachers&action=EditView&type=Teacher', idField: 'name', idValue: `${RUN_ID}_TEACHER`, supportsCrud: false },
  { key: 'rooms', name: 'Rooms', list: '#C_Rooms', create: '#C_Rooms/create', idField: 'name', idValue: `${RUN_ID}_ROOM`, supportsCrud: true },
];

function textNorm(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function cssEscape(value) {
  if (!value) return '';
  return String(value).replace(/([ #;?%&,.+*~\':"!^$\[\]()=>|/@])/g, '\\$1');
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
    .slice(0, 3);
}

function buildCandidates(el, attrs) {
  const tag = (el.tagName || '').toLowerCase();
  const text = textNorm(el.innerText || el.textContent || '').slice(0, 80);
  const selectors = [];
  ['data-cy', 'data-testid', 'data-test', 'data-qa'].forEach(key => attrs[key] && selectors.push(`[${key}="${attrs[key]}"]`));
  if (attrs.id) selectors.push(`#${cssEscape(attrs.id)}`);
  if (attrs.name) selectors.push(`${tag}[name="${attrs.name}"]`);
  if (attrs.role) selectors.push(`${tag}[role="${attrs.role}"]`);
  if (attrs['aria-label']) selectors.push(`${tag}[aria-label="${attrs['aria-label']}"]`);
  if (attrs.placeholder) selectors.push(`${tag}[placeholder="${attrs.placeholder}"]`);
  if (attrs.href && attrs.href !== '#') selectors.push(`${tag}[href="${attrs.href}"]`);
  if (attrs.type) selectors.push(`${tag}[type="${attrs.type}"]`);
  stableClasses(attrs.class || '').forEach(cls => selectors.push(`${tag}.${cssEscape(cls)}`));
  if (text && ['button', 'a', 'label', 'span', 'div'].includes(tag)) selectors.push(`${tag}:contains("${text}")`);
  return Array.from(new Set(selectors)).slice(0, 10);
}

function getKind(el, attrs) {
  const tag = (el.tagName || '').toLowerCase();
  const role = attrs.role || '';
  if (role === 'dialog') return 'dialog';
  if (tag === 'input' || tag === 'textarea' || tag === 'select') return 'form-field';
  if (tag === 'button' || role === 'button') return 'button';
  if (role === 'tab') return 'tab';
  if (tag === 'th') return 'table-header';
  if (tag === 'tr') return 'table-row';
  if (tag === 'a' || role === 'menuitem') return 'link-or-menu';
  if (/error|validation|alert/i.test(attrs.class || '')) return 'validation';
  if (/dropdown|select2|picker|calendar/i.test(attrs.class || '')) return 'picker';
  return tag || 'element';
}

function harvestDoc(doc, meta = {}) {
  const nodes = Array.from(doc.querySelectorAll('a, button, input, textarea, select, [role], th, label, nav, aside, form, [aria-label], [placeholder], .select2, .recordlist tbody tr, .list-view tbody tr, .detail.fld_, .edit.fld_, .record, .drawer, .modal, .alert, .error')).slice(0, 450);
  const elements = nodes.map((el, index) => {
    const attrs = attrMap(el);
    const text = textNorm(el.innerText || el.textContent || '');
    const label = attrs['aria-label'] || attrs.placeholder || attrs.title || text;
    return {
      index,
      kind: getKind(el, attrs),
      tag: (el.tagName || '').toLowerCase(),
      text: text.slice(0, 200),
      label: textNorm(label).slice(0, 200),
      role: attrs.role || '',
      name: attrs.name || '',
      id: attrs.id || '',
      class: attrs.class || '',
      type: attrs.type || '',
      href: attrs.href || '',
      selectors: buildCandidates(el, attrs),
    };
  }).filter(x => x.text || x.label || x.id || x.name || x.href || x.selectors.length);

  const limitedElements = elements.slice(0, 220);
  return {
    url: doc.location.href,
    title: doc.title,
    module: meta.module || '',
    stage: meta.stage || '',
    headings: Array.from(doc.querySelectorAll('h1,h2,h3,.page-title,.module-title,[role="heading"],.headerpane')).map(el => textNorm(el.textContent || '')).filter(Boolean).slice(0, 20),
    elementCount: limitedElements.length,
    elements: limitedElements,
  };
}

function buildMarkdown(report) {
  const lines = [
    '# Selector Library',
    '',
    `Generated at: ${report.generatedAt}`,
    `Base URL: ${report.baseUrl}`,
    `Run ID: ${report.runId}`,
    `Pages captured: ${report.pages.length}`,
    '',
    '## Deep crawl summary',
    ''
  ];
  report.modules.forEach(mod => {
    lines.push(`### ${mod.name}`);
    lines.push(`- Stages: ${(mod.stages || []).join(', ') || 'none'}`);
    lines.push(`- CRUD executed: ${(mod.crudActions || []).join(', ') || 'none'}`);
    lines.push(`- Notes: ${(mod.notes || []).join(' | ') || 'none'}`);
    lines.push('');
  });
  report.pages.forEach((page, idx) => {
    lines.push(`## ${idx + 1}. [${page.module}] ${page.stage} — ${page.title || page.url}`);
    lines.push(`- URL: ${page.url}`);
    if (page.headings?.length) lines.push(`- Headings: ${page.headings.join(' | ')}`);
    lines.push(`- Elements captured: ${page.elementCount}`);
    lines.push('');
    lines.push('| Kind | Label/Text | Role/Type | Candidate selectors |');
    lines.push('|---|---|---|---|');
    page.elements.slice(0, 180).forEach(el => {
      lines.push(`| ${el.kind} | ${(el.label || el.text || '').replace(/\|/g, '\\|').slice(0, 120)} | ${[el.role, el.type].filter(Boolean).join(' / ').replace(/\|/g, '\\|')} | ${(el.selectors || []).join('<br>').replace(/\|/g, '\\|')} |`);
    });
    lines.push('');
  });
  return lines.join('\n');
}

function clickIfFound(selectors) {
  return cy.get('body').then($body => {
    for (const selector of selectors) {
      const $el = $body.find(selector).filter(':visible').first();
      if ($el.length) {
        return cy.wrap($el).click({ force: true }).then(() => true);
      }
    }
    return false;
  });
}

function capture(report, moduleKey, stage) {
  cy.document().then(doc => {
    report.pages.push(harvestDoc(doc, { module: moduleKey, stage }));
  });
}

function typeIfExists(selector, value) {
  return cy.get('body').then($body => {
    const $el = $body.find(selector).filter(':visible').first();
    if ($el.length) {
      return cy.wrap($el).clear({ force: true }).type(value, { force: true }).then(() => true);
    }
    return false;
  });
}

function setFirstTextFieldFallback(value) {
  return cy.get('body').then($body => {
    const $field = $body.find('input[type="text"], input:not([type]), textarea').filter(':visible').not('[readonly]').first();
    if ($field.length) {
      return cy.wrap($field).clear({ force: true }).type(value, { force: true }).then(() => true);
    }
    return false;
  });
}

function saveForm() {
  return clickIfFound([
    '.fld_save_button a',
    '.fld_save_button button',
    'a[name="save_button"]',
    'button[name="save_button"]',
    '.btn-primary[name="save_button"]',
    '.headerpane .btn-primary',
    '.record .btn-primary',
    'input#SAVE',
    'input#SAVE_HEADER',
    'input#SAVE_FOOTER',
  ]);
}

function editRecord() {
  return clickIfFound([
    '.fld_edit_button a',
    '.fld_edit_button button',
    'a[name="edit_button"]',
    'button[name="edit_button"]',
    '.record button.btn-invisible',
    '.record a.btn-invisible',
  ]);
}

function openDelete() {
  return clickIfFound([
    '.fld_delete_button a',
    '.fld_delete_button button',
    'a[name="delete_button"]',
    'button[name="delete_button"]',
    '.btn[name="delete_button"]',
  ]);
}

function confirmDelete() {
  return clickIfFound([
    '.modal-dialog .btn-danger',
    '.modal-dialog .btn-primary',
    '.alert .btn-danger',
    '.sweet-alert .confirm',
    '.confirmation .btn-danger',
  ]);
}

describe('CRM selector library deep collector', () => {
  it('crawls modules deeply and updates selector artifacts', () => {
    const report = {
      generatedAt: new Date().toISOString(),
      baseUrl: TARGET_URL,
      runId: RUN_ID,
      pages: [],
      modules: [],
      leftovers: [],
      globalNotes: [],
    };

    cy.on('uncaught:exception', () => false);
    cy.visit(TARGET_URL, { failOnStatusCode: false, timeout: 120000 });
    cy.get('input[name="username"]', { timeout: 120000 }).then($els => {
      const el = [...$els].find(x => Cypress.$(x).is(':visible')) || $els[0];
      cy.wrap(el).clear({ force: true }).type(USERNAME, { force: true, log: false });
    });
    cy.get('input[name="password"]', { timeout: 120000 }).then($els => {
      const el = [...$els].find(x => Cypress.$(x).is(':visible')) || $els[0];
      cy.wrap(el).clear({ force: true }).type(PASSWORD, { force: true, log: false });
    });
    cy.get('a[name="login_button"], button[type="submit"]', { timeout: 120000 }).then($els => {
      const el = [...$els].find(x => Cypress.$(x).is(':visible')) || $els[0];
      cy.wrap(el).click({ force: true });
    });
    cy.contains(/Create Dashboard|Teacher Dashboard|Home/i, { timeout: 120000 }).should('exist');
    cy.wait(3000);

    MODULES.forEach(mod => {
      const result = { key: mod.key, name: mod.name, stages: [], crudActions: [], notes: [] };
      report.modules.push(result);

      cy.visit(`https://stagingcrm.scotsenglish.edu.vn/index.php${mod.list}`, { failOnStatusCode: false, timeout: 120000 });
      cy.wait(3000);
      capture(report, mod.key, 'list');
      result.stages.push('list');

      clickIfFound([
        '.list.fld_preview_button a',
        '.recordlist a[href*="/"], .recordlist td a',
        '.fld_name.list a',
        'table tbody tr td a',
      ]);
      cy.wait(2000);
      cy.location('href').then(href => {
        if (!href.includes(mod.list.replace('#', ''))) {
          capture(report, mod.key, 'detail-existing');
          result.stages.push('detail-existing');
          openDelete();
          cy.wait(800);
          capture(report, mod.key, 'delete-modal-existing');
          result.stages.push('delete-modal-existing');
          clickIfFound(['.modal-dialog .btn-invisible', '.modal-dialog .cancel', '.close']);
          cy.wait(500);
          editRecord();
          cy.wait(1500);
          capture(report, mod.key, 'edit-existing');
          result.stages.push('edit-existing');
        } else {
          result.notes.push('Could not open existing detail from list using generic selectors');
        }
      });

      cy.visit(`https://stagingcrm.scotsenglish.edu.vn/index.php${mod.create}`, { failOnStatusCode: false, timeout: 120000 });
      cy.wait(3000);
      capture(report, mod.key, 'create');
      result.stages.push('create');

      saveForm();
      cy.wait(1500);
      capture(report, mod.key, 'validation');
      result.stages.push('validation');

      if (mod.supportsCrud) {
        typeIfExists(`input[name="${mod.idField}"]`, mod.idValue).then(done => {
          if (!done) return setFirstTextFieldFallback(mod.idValue);
          return null;
        });

        if (mod.key === 'leads' || mod.key === 'contacts') {
          typeIfExists('input[name="first_name"]', 'AUTO').then(() => null);
          typeIfExists('input[name="phone_mobile"]', '0900000001').then(() => null);
          typeIfExists('input[name="email1"]', `${RUN_ID.toLowerCase()}@example.com`).then(() => null);
        }

        if (mod.key === 'accounts' || mod.key === 'rooms') {
          typeIfExists('textarea[name="description"]', `Created by ${RUN_ID}`).then(() => null);
        }

        saveForm();
        cy.wait(4000);
        cy.location('href').then(href => {
          if (!href.includes('/create')) {
            capture(report, mod.key, 'detail-created');
            result.stages.push('detail-created');
            result.crudActions.push('create');

            editRecord();
            cy.wait(2000);
            capture(report, mod.key, 'edit-created');
            result.stages.push('edit-created');
            typeIfExists(`input[name="${mod.idField}"]`, `${mod.idValue}_EDIT`).then(done => {
              if (!done) return setFirstTextFieldFallback(`${mod.idValue}_EDIT`);
              return null;
            });
            saveForm();
            cy.wait(3000);
            capture(report, mod.key, 'detail-updated');
            result.stages.push('detail-updated');
            result.crudActions.push('edit');

            openDelete();
            cy.wait(1000);
            capture(report, mod.key, 'delete-modal-created');
            result.stages.push('delete-modal-created');
            confirmDelete();
            cy.wait(4000);
            result.crudActions.push('delete');
          } else {
            result.notes.push('Create save did not leave create route; likely required hidden/complex fields');
            report.leftovers.push({ module: mod.key, value: mod.idValue, status: 'not-created' });
          }
        });
      } else {
        result.notes.push('CRUD submit skipped for this module due likely complex business rules / BWC iframe flow');
      }
    });

    cy.then(() => {
      report.globalNotes.push('Deep crawl includes list/create/validation/detail/edit/delete states where reachable.');
      cy.writeFile(OUTPUT_JSON, report);
      cy.writeFile(OUTPUT_MD, buildMarkdown(report));
      cy.writeFile(OUTPUT_NOTES, [
        '# Selector Library Deep Notes',
        '',
        `Run ID: ${report.runId}`,
        '',
        '## Modules',
        ...report.modules.flatMap(mod => [
          `### ${mod.name}`,
          `- stages: ${(mod.stages || []).join(', ') || 'none'}`,
          `- crudActions: ${(mod.crudActions || []).join(', ') || 'none'}`,
          `- notes: ${(mod.notes || []).join(' | ') || 'none'}`,
          ''
        ]),
        '## Leftovers',
        ...(report.leftovers.length ? report.leftovers.map(x => `- ${x.module}: ${x.value} (${x.status})`) : ['- none'])
      ].join('\n'));
    });
  });
});
