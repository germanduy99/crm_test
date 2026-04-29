const TARGET_URL = 'https://stagingcrm.scotsenglish.edu.vn/index.php#Home';
const USERNAME = Cypress.env('CRM_USERNAME') || 'anhtt@scotsenglish.com';
const PASSWORD = Cypress.env('CRM_PASSWORD') || 'Tienanh23997@';
const TS = Date.now();
const NAME = `AUTO_REQ_ACCOUNT_${TS}`;
function firstVisible($collection) { return [...$collection].find(el => Cypress.$(el).is(':visible')) || $collection[0]; }
describe('create account only', () => {
  it('creates account', () => {
    cy.on('uncaught:exception', () => false);
    cy.visit(TARGET_URL, { failOnStatusCode: false, timeout: 120000 });
    cy.get('input[name="username"]', { timeout: 120000 }).then($els => cy.wrap(firstVisible($els)).clear({ force: true }).type(USERNAME, { force: true, log: false }));
    cy.get('input[name="password"]', { timeout: 120000 }).then($els => cy.wrap(firstVisible($els)).clear({ force: true }).type(PASSWORD, { force: true, log: false }));
    cy.get('a[name="login_button"], button[type="submit"]', { timeout: 120000 }).then($els => cy.wrap(firstVisible($els)).click({ force: true }));
    cy.contains(/Create Dashboard|Teacher Dashboard|Home/i, { timeout: 120000 }).should('exist');
    cy.visit('https://stagingcrm.scotsenglish.edu.vn/index.php#Accounts/create', { failOnStatusCode: false, timeout: 120000 });
    cy.wait(4000);
    cy.get('input[name="name"]').clear({force:true}).type(NAME, {force:true});
    cy.get('input[name="phone_office"]').clear({force:true}).type('0900000001', {force:true});
    cy.get('input[name="legal_representative"]').clear({force:true}).type('AUTO REP', {force:true});
    cy.get('textarea[name="billing_address_street"]').clear({force:true}).type('Auto billing address', {force:true});
    cy.get('a.select2-choice').first().click({force:true});
    cy.get('body').then($b => {
      const $opt = $b.find('.select2-results li:visible .select2-result-label').first();
      if ($opt.length) cy.wrap($opt).click({force:true});
    });
    cy.get('a[name="save_button"], .fld_save_button a, .headerpane .btn-primary').filter(':visible').first().click({force:true});
    cy.wait(6000);
    cy.location('href').then(href => {
      cy.writeFile('docs/account-create-result.json', { name: NAME, href });
    });
  });
});