const TARGET_URL = 'https://stagingcrm.scotsenglish.edu.vn/index.php#Home';
const USERNAME = Cypress.env('CRM_USERNAME') || 'anhtt@scotsenglish.com';
const PASSWORD = Cypress.env('CRM_PASSWORD') || 'Tienanh23997@';
function firstVisible($collection) { return [...$collection].find(el => Cypress.$(el).is(':visible')) || $collection[0]; }
describe('dump direct editviews', () => {
  it('contacts/rooms direct', () => {
    cy.on('uncaught:exception', () => false);
    cy.visit(TARGET_URL, { failOnStatusCode: false, timeout: 120000 });
    cy.get('input[name="username"]', { timeout: 120000 }).then($els => cy.wrap(firstVisible($els)).clear({ force: true }).type(USERNAME, { force: true, log: false }));
    cy.get('input[name="password"]', { timeout: 120000 }).then($els => cy.wrap(firstVisible($els)).clear({ force: true }).type(PASSWORD, { force: true, log: false }));
    cy.get('a[name="login_button"], button[type="submit"]', { timeout: 120000 }).then($els => cy.wrap(firstVisible($els)).click({ force: true }));
    cy.contains(/Create Dashboard|Teacher Dashboard|Home/i, { timeout: 120000 }).should('exist');
    ['https://stagingcrm.scotsenglish.edu.vn/index.php?module=Contacts&action=EditView','https://stagingcrm.scotsenglish.edu.vn/index.php?module=C_Rooms&action=EditView'].forEach((u, i) => {
      cy.visit(u, {failOnStatusCode:false, timeout:120000});
      cy.wait(4000);
      cy.document().then(doc => cy.writeFile(`docs/direct-${i}.html`, doc.body.innerHTML));
    });
  });
});