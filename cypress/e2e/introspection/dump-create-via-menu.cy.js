const TARGET_URL = 'https://stagingcrm.scotsenglish.edu.vn/index.php#Home';
const USERNAME = Cypress.env('CRM_USERNAME') || 'anhtt@scotsenglish.com';
const PASSWORD = Cypress.env('CRM_PASSWORD') || 'Tienanh23997@';
function firstVisible($collection) { return [...$collection].find(el => Cypress.$(el).is(':visible')) || $collection[0]; }
describe('dump via menu', () => {
  it('contacts via menu', () => {
    cy.on('uncaught:exception', () => false);
    cy.visit(TARGET_URL, { failOnStatusCode: false, timeout: 120000 });
    cy.get('input[name="username"]', { timeout: 120000 }).then($els => cy.wrap(firstVisible($els)).clear({ force: true }).type(USERNAME, { force: true, log: false }));
    cy.get('input[name="password"]', { timeout: 120000 }).then($els => cy.wrap(firstVisible($els)).clear({ force: true }).type(PASSWORD, { force: true, log: false }));
    cy.get('a[name="login_button"], button[type="submit"]', { timeout: 120000 }).then($els => cy.wrap(firstVisible($els)).click({ force: true }));
    cy.contains(/Create Dashboard|Teacher Dashboard|Home/i, { timeout: 120000 }).should('exist');
    cy.get('a[href="#Contacts/create"]', {timeout: 30000}).first().click({force:true});
    cy.wait(5000);
    cy.location('href').then(href => cy.writeFile('docs/contacts-via-menu-url.txt', href));
    cy.document().then(doc => {
      cy.writeFile('docs/contacts-via-menu-body.html', doc.body.innerHTML);
    });
  });
});