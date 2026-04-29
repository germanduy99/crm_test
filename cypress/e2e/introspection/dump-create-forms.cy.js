const TARGET_URL = 'https://stagingcrm.scotsenglish.edu.vn/index.php#Home';
const USERNAME = Cypress.env('CRM_USERNAME') || 'anhtt@scotsenglish.com';
const PASSWORD = Cypress.env('CRM_PASSWORD') || 'Tienanh23997@';
const PAGES = [
  { name: 'contacts', hash: '#Contacts/create' },
  { name: 'accounts', hash: '#Accounts/create' },
  { name: 'rooms', hash: '#C_Rooms/create' },
];
function firstVisible($collection) { return [...$collection].find(el => Cypress.$(el).is(':visible')) || $collection[0]; }
function clickIfFound(selectors) {
  return cy.get('body').then($body => {
    for (const selector of selectors) {
      const $el = $body.find(selector).filter(':visible').first();
      if ($el.length) return cy.wrap($el).click({ force: true }).then(() => true);
    }
    return false;
  });
}
describe('dump create forms', () => {
  it('dumps html', () => {
    cy.on('uncaught:exception', () => false);
    cy.visit(TARGET_URL, { failOnStatusCode: false, timeout: 120000 });
    cy.get('input[name="username"]', { timeout: 120000 }).then($els => cy.wrap(firstVisible($els)).clear({ force: true }).type(USERNAME, { force: true, log: false }));
    cy.get('input[name="password"]', { timeout: 120000 }).then($els => cy.wrap(firstVisible($els)).clear({ force: true }).type(PASSWORD, { force: true, log: false }));
    cy.get('a[name="login_button"], button[type="submit"]', { timeout: 120000 }).then($els => cy.wrap(firstVisible($els)).click({ force: true }));
    cy.contains(/Create Dashboard|Teacher Dashboard|Home/i, { timeout: 120000 }).should('exist');
    PAGES.forEach(p => {
      cy.visit(`https://stagingcrm.scotsenglish.edu.vn/index.php${p.hash}`, { failOnStatusCode: false, timeout: 120000 });
      cy.wait(4000);
      clickIfFound(['.alert .btn-primary','.alert .confirm','.modal-dialog .btn-primary','button:contains("Confirm")']);
      cy.wait(1500);
      cy.document().then(doc => {
        cy.writeFile(`docs/${p.name}-create-body.html`, doc.body.innerHTML);
        const summary = [...doc.querySelectorAll('input,select,textarea,label')].map((el, idx) => ({
          idx,
          tag: el.tagName.toLowerCase(),
          type: el.getAttribute('type') || '',
          name: el.getAttribute('name') || '',
          id: el.getAttribute('id') || '',
          class: el.getAttribute('class') || '',
          text: (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0,200),
          outer: el.outerHTML.slice(0,500),
        }));
        cy.writeFile(`docs/${p.name}-create-elements.json`, summary);
      });
    });
  });
});