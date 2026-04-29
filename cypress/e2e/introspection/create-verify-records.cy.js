const TARGET_URL = 'https://stagingcrm.scotsenglish.edu.vn/index.php#Home';
const USERNAME = Cypress.env('CRM_USERNAME') || 'anhtt@scotsenglish.com';
const PASSWORD = Cypress.env('CRM_PASSWORD') || 'Tienanh23997@';
const OUTPUT_JSON = 'docs/test-data-created.json';
const OUTPUT_MD = 'docs/test-data-created.md';
const RUN_TS = Date.now();

const RECORDS = [
  {
    module: 'Contacts/Students',
    key: 'contacts',
    createHash: '#Contacts/create',
    acceptedHashes: ['#Contacts/create'],
    idField: 'last_name',
    recordName: `AUTO_VERIFY_CONTACT_${RUN_TS}`,
    fill() {
      typeIfExists('input[name="last_name"]', this.recordName);
      typeIfExists('input[name="first_name"]', 'AUTO');
      typeIfExists('input[name="phone_mobile"]', '0900000001');
      typeIfExists('input[name="email1"]', `auto_verify_contact_${RUN_TS}@example.com`);
    },
  },
  {
    module: 'Accounts',
    key: 'accounts',
    createHash: '#Accounts/create',
    acceptedHashes: ['#Accounts/create'],
    idField: 'name',
    recordName: `AUTO_VERIFY_ACCOUNT_${RUN_TS}`,
    fill() {
      typeIfExists('input[name="name"]', this.recordName);
      typeIfExists('textarea[name="description"]', `Created by Cypress at ${new Date(RUN_TS).toISOString()}`);
    },
  },
  {
    module: 'Rooms',
    key: 'rooms',
    createHash: '#C_Rooms/create',
    acceptedHashes: ['#C_Rooms/create', '#bwc/index.php?module=C_Rooms&action=EditView'],
    idField: 'name',
    recordName: `AUTO_VERIFY_ROOM_${RUN_TS}`,
    fill() {
      typeIfExists('input[name="name"]', this.recordName);
      typeIfExists('textarea[name="description"]', `Created by Cypress at ${new Date(RUN_TS).toISOString()}`);
    },
  },
];

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

function typeIfExists(selector, value) {
  return cy.get('body').then($body => {
    const $el = $body.find(selector).filter(':visible').first();
    if ($el.length) {
      return cy.wrap($el).clear({ force: true }).type(String(value), { force: true }).then(() => true);
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
    'a:contains("Save")',
    'button:contains("Save")',
  ]);
}

function textOrEmpty($root, selectors) {
  for (const selector of selectors) {
    const $el = $root.find(selector).filter(':visible').first();
    if ($el.length) return $el.text().replace(/\s+/g, ' ').trim();
  }
  return '';
}

function attrOrEmpty($root, selectors, attr) {
  for (const selector of selectors) {
    const $el = $root.find(selector).filter(':visible').first();
    if ($el.length) return ($el.attr(attr) || '').trim();
  }
  return '';
}

function navigateToCreateRoute(createHash, acceptedHashes = [createHash]) {
  cy.visit(`https://stagingcrm.scotsenglish.edu.vn/index.php${createHash}`, { failOnStatusCode: false, timeout: 120000 });
  cy.wait(2000);
  clickIfFound([
    '.alert .btn-primary',
    '.alert .confirm',
    '.modal-dialog .btn-primary',
    '.modal-dialog .confirm',
    'button:contains("Confirm")',
    'a:contains("Confirm")',
  ]);
  cy.wait(1500);
  cy.location('hash', { timeout: 20000 }).then(hash => {
    if (!acceptedHashes.includes(hash)) {
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
    }
  });
  cy.location('hash', { timeout: 20000 }).should(hash => {
    expect(acceptedHashes, `accepted hash for ${createHash}`).to.include(hash);
  });
}

function collectOutcome(def) {
  return cy.location('href').then(href => {
    return cy.get('body').then($body => {
      const title = textOrEmpty($body, [
        '.record h1',
        '.record .headerpane h1',
        '.record .page-header h1',
        '.record .record-header h1',
        '.headerpane h1',
      ]);
      const successText = textOrEmpty($body, [
        'div.alert-success',
        'div.alert',
      ]);
      const validationText = textOrEmpty($body, [
        'div.alert-danger',
        'div.alert-warning',
        '.has-error .help-block',
        '.error',
        '.text-danger',
      ]);
      const idLikeText = [
        textOrEmpty($body, ['.detail.fld_number', '.detail.fld_code', '.detail.fld_id']),
        attrOrEmpty($body, ['[data-id]'], 'data-id'),
      ].filter(Boolean).join(' | ');

      const hash = (() => {
        try { return new URL(href).hash || ''; } catch (e) { return ''; }
      })();
      const isSaved = !hash.includes('/create');
      const idFromHash = (hash.match(/#(?:[^/]+)\/([^/?]+)/) || [])[1] || '';

      return {
        module: def.module,
        key: def.key,
        requestedName: def.recordName,
        visibleTitle: title,
        saved: isSaved,
        urlAfterSave: href,
        routeAfterSave: hash || href,
        recordIdOrCode: idLikeText || idFromHash || '',
        successText,
        validationText,
      };
    });
  });
}

describe('Create verify records and keep them for DB verification', () => {
  it('creates contact/account/room when possible and logs the results', () => {
    const results = [];

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

    RECORDS.forEach(def => {
      navigateToCreateRoute(def.createHash, def.acceptedHashes);
      def.fill();
      saveForm();
      cy.wait(5000);
      collectOutcome(def).then(outcome => {
        results.push(outcome);
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
      const md = [
        '# Test data created',
        '',
        `Generated at: ${payload.generatedAt}`,
        `Run timestamp: ${RUN_TS}`,
        '',
        '| Module | Requested name | Saved | Route/URL after save | Visible title | Record ID/code | Notes |',
        '|---|---|---|---|---|---|---|',
        ...results.map(r => `| ${r.module} | ${r.requestedName} | ${r.saved ? 'YES' : 'NO'} | ${(r.routeAfterSave || '').replace(/\|/g, '\\|')} | ${(r.visibleTitle || '').replace(/\|/g, '\\|')} | ${(r.recordIdOrCode || '').replace(/\|/g, '\\|')} | ${((r.validationText || r.successText || '')).replace(/\|/g, '\\|')} |`),
        '',
        'Keep these records for DB verification. Do not delete.',
      ].join('\n');

      cy.writeFile(OUTPUT_JSON, payload);
      cy.writeFile(OUTPUT_MD, md);
    });
  });
});
