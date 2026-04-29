const TARGET_URL = 'https://stagingcrm.scotsenglish.edu.vn/index.php#Home';
const USERNAME = Cypress.env('CRM_USERNAME') || 'anhtt@scotsenglish.com';
const PASSWORD = Cypress.env('CRM_PASSWORD') || 'Tienanh23997@';
const OUTPUT_JSON = 'docs/test-data-created.json';
const OUTPUT_MD = 'docs/test-data-created.md';
const RUN_TS = Date.now();

const MODULES = [
  {
    module: 'Contacts/Students',
    key: 'contacts',
    createHash: '#Contacts/create',
    acceptedHashes: ['#Contacts/create'],
    recordName: `AUTO_REQ_CONTACT_${RUN_TS}`,
    email: `auto_req_contact_${RUN_TS}@example.com`,
  },
  {
    module: 'Accounts',
    key: 'accounts',
    createHash: '#Accounts/create',
    acceptedHashes: ['#Accounts/create'],
    recordName: `AUTO_REQ_ACCOUNT_${RUN_TS}`,
    email: `auto_req_account_${RUN_TS}@example.com`,
  },
  {
    module: 'Rooms',
    key: 'rooms',
    createHash: '#C_Rooms/create',
    acceptedHashes: ['#C_Rooms/create', '#bwc/index.php?module=C_Rooms&action=EditView'],
    recordName: `AUTO_REQ_ROOM_${RUN_TS}`,
    email: `auto_req_room_${RUN_TS}@example.com`,
  },
];

function firstVisible($collection) {
  return [...$collection].find(el => Cypress.$(el).is(':visible')) || $collection[0];
}

function normalize(text = '') {
  return String(text).replace(/\s+/g, ' ').trim();
}

function clickIfFound(selectors) {
  return cy.get('body').then($body => {
    for (const selector of selectors) {
      const $el = $body.find(selector).filter(':visible').first();
      if ($el.length) return cy.wrap($el).click({ force: true }).then(() => true);
    }
    return false;
  });
}

function navigateToCreateRoute(createHash, acceptedHashes = [createHash]) {
  cy.visit(`https://stagingcrm.scotsenglish.edu.vn/index.php${createHash}`, { failOnStatusCode: false, timeout: 120000 });
  cy.wait(2500);
  clickIfFound([
    '.alert .btn-primary',
    '.alert .confirm',
    '.modal-dialog .btn-primary',
    '.modal-dialog .confirm',
    'button:contains("Confirm")',
    'a:contains("Confirm")',
  ]);
  cy.wait(1500);
  cy.location('hash', { timeout: 30000 }).should(hash => {
    const ok = acceptedHashes.some(candidate => hash === candidate || hash.startsWith(candidate));
    expect(ok, `accepted hash for ${createHash}: ${hash}`).to.eq(true);
  });
}

function detectFields() {
  return cy.document().then(doc => {
    const $ = Cypress.$;
    const fields = [];
    const seen = new Set();

    $('label').each((_, label) => {
      const $label = $(label);
      const labelText = normalize($label.text());
      const required = /\*/.test(labelText) || $label.find('.required, .fa-asterisk').length > 0;
      if (!required) return;

      let $field = $();
      const forId = $label.attr('for');
      if (forId) $field = $(`#${forId}`);
      if (!$field.length) $field = $label.closest('.record-cell, .edit, .fld_, .detail').find('input, textarea, select').filter(':visible').first();
      if (!$field.length) $field = $label.parent().find('input, textarea, select').filter(':visible').first();
      if (!$field.length) $field = $label.nextAll('input, textarea, select').filter(':visible').first();
      if (!$field.length) return;

      const el = $field[0];
      const tag = (el.tagName || '').toLowerCase();
      const type = ($field.attr('type') || tag || '').toLowerCase();
      const name = $field.attr('name') || '';
      const id = $field.attr('id') || '';
      const key = `${tag}|${type}|${name}|${id}`;
      if (seen.has(key)) return;
      seen.add(key);

      let selector = '';
      if (id) selector = `#${id}`;
      else if (name) selector = `${tag}[name="${name}"]`;
      else selector = tag;

      fields.push({
        label: labelText,
        required: true,
        selector,
        tag,
        type,
        name,
        id,
      });
    });

    return fields;
  });
}

function chooseSelectValue($el) {
  const options = [...$el.find('option')]
    .map(o => ({ value: (o.value || '').trim(), text: normalize(o.textContent || '') }))
    .filter(o => o.value && !/^select/i.test(o.text) && !/^--/.test(o.text));
  return options[0]?.value || '';
}

function fillField(field, def, index) {
  return cy.get('body').then($body => {
    const $el = $body.find(field.selector).filter(':visible').first();
    if (!$el.length) return null;

    const label = (field.label || '').toLowerCase();
    const name = (field.name || '').toLowerCase();
    const type = (field.type || '').toLowerCase();
    const tag = (field.tag || '').toLowerCase();
    let value = '';

    if (tag === 'select') {
      value = chooseSelectValue($el);
      if (value) cy.wrap($el).select(value, { force: true });
      return value || null;
    }

    if (type === 'date') {
      value = '2026-04-29';
    } else if (label.includes('email') || name.includes('email')) {
      value = def.email;
    } else if (label.includes('phone') || label.includes('mobile') || name.includes('phone') || name.includes('mobile')) {
      value = '0900000001';
    } else if (label.includes('first name') || name === 'first_name') {
      value = 'AUTO';
    } else if (label.includes('last name') || label === 'name *' || label.startsWith('name') || name === 'last_name' || name === 'name') {
      value = def.recordName;
    } else if (label.includes('description') || tag === 'textarea') {
      value = `Auto created ${RUN_TS}`;
    } else if (type === 'number') {
      value = '1';
    } else if (type === 'tel') {
      value = '0900000001';
    } else {
      value = `${def.key}_${index + 1}_${RUN_TS}`;
    }

    cy.wrap($el).clear({ force: true }).type(String(value), { force: true });
    return value;
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
    'a:contains("Save")',
    'button:contains("Save")',
  ]);
}

function collectOutcome(def, filledFields, requiredFields) {
  return cy.location('href').then(href => {
    return cy.get('body').then($body => {
      const text = normalize($body.text());
      const title = normalize($body.find('.record h1, .headerpane h1, .record .record-header h1').filter(':visible').first().text());
      const hash = (() => { try { return new URL(href).hash || ''; } catch (e) { return ''; }})();
      const saved = !hash.includes('/create') && !/Please resolve any errors before proceeding/i.test(text);
      const idLike = normalize([
        $body.find('.detail.fld_number, .detail.fld_code, .detail.fld_id, [field="number"], [field="code"]').filter(':visible').first().text(),
        $body.find('[data-id]').filter(':visible').first().attr('data-id') || ''
      ].filter(Boolean).join(' | '));

      const errors = [...$body.find('.has-error .help-block, .error, .text-danger, .alert-danger, .alert-warning')]
        .map(el => normalize(el.textContent || ''))
        .filter(Boolean)
        .join(' | ');

      return {
        module: def.module,
        key: def.key,
        recordName: def.recordName,
        requiredFieldsDetected: requiredFields,
        filledRequiredFields: filledFields,
        routeAfterSave: hash || href,
        urlAfterSave: href,
        recordIdOrCode: idLike || ((hash.match(/#(?:[^/]+)\/([^/?]+)/) || [])[1] || ''),
        visibleTitle: title,
        success: saved,
        notes: errors,
      };
    });
  });
}

describe('Create real records by filling required fields', () => {
  it('creates Contacts/Students, Accounts, Rooms and keeps records', () => {
    const results = [];

    cy.on('uncaught:exception', () => false);
    cy.visit(TARGET_URL, { failOnStatusCode: false, timeout: 120000 });
    cy.get('input[name="username"]', { timeout: 120000 }).then($els => cy.wrap(firstVisible($els)).clear({ force: true }).type(USERNAME, { force: true, log: false }));
    cy.get('input[name="password"]', { timeout: 120000 }).then($els => cy.wrap(firstVisible($els)).clear({ force: true }).type(PASSWORD, { force: true, log: false }));
    cy.get('a[name="login_button"], button[type="submit"]', { timeout: 120000 }).then($els => cy.wrap(firstVisible($els)).click({ force: true }));
    cy.contains(/Create Dashboard|Teacher Dashboard|Home/i, { timeout: 120000 }).should('exist');
    cy.wait(3000);

    MODULES.forEach(def => {
      navigateToCreateRoute(def.createHash, def.acceptedHashes);
      detectFields().then(fields => {
        const filledFields = [];
        const requiredFields = fields.map(f => ({
          label: f.label,
          selector: f.selector,
          type: f.type,
          name: f.name,
        }));

        cy.wrap(fields).each((field, index) => {
          fillField(field, def, index).then(value => {
            if (value) {
              filledFields.push({
                label: field.label,
                selector: field.selector,
                type: field.type,
                value: String(value),
              });
            }
          });
        }).then(() => {
          saveForm();
          cy.wait(6000);
          collectOutcome(def, filledFields, requiredFields).then(outcome => {
            results.push(outcome);
          });
        });
      });

      cy.visit(TARGET_URL, { failOnStatusCode: false, timeout: 120000 });
      cy.wait(2000);
    });

    cy.then(() => {
      const payload = {
        generatedAt: new Date().toISOString(),
        runTimestamp: RUN_TS,
        baseUrl: TARGET_URL,
        results,
      };

      const lines = [
        '# Test data created',
        '',
        `Generated at: ${payload.generatedAt}`,
        `Run timestamp: ${RUN_TS}`,
        '',
      ];

      results.forEach(r => {
        lines.push(`## ${r.module}`);
        lines.push(`- Record name: ${r.recordName}`);
        lines.push(`- Success: ${r.success ? 'YES' : 'NO'}`);
        lines.push(`- Route after save: ${r.routeAfterSave}`);
        lines.push(`- URL after save: ${r.urlAfterSave}`);
        lines.push(`- Record ID/code: ${r.recordIdOrCode || '(not visible)'}`);
        lines.push(`- Required fields detected:`);
        r.requiredFieldsDetected.forEach(f => lines.push(`  - ${f.label} -> ${f.selector} [${f.type || 'unknown'}]`));
        lines.push(`- Filled required fields:`);
        r.filledRequiredFields.forEach(f => lines.push(`  - ${f.label} = ${f.value} (${f.selector})`));
        if (r.notes) lines.push(`- Notes: ${r.notes}`);
        lines.push('');
      });

      lines.push('Keep these records for DB verification. Do not delete.');

      cy.writeFile(OUTPUT_JSON, payload);
      cy.writeFile(OUTPUT_MD, lines.join('\n'));
    });
  });
});