describe('Create-Class', () => {
  before(() => {
    cy.visit('https://stagingcrm.scotsenglish.edu.vn');
    cy.get('input[name="username"]').type('anhtt@scotsenglish.com', { force: true });
    cy.get('input[name="password"]').type('Tienanh23997@', { force: true });
    cy.get('a[name="login_button"]').click({ force: true });
    cy.wait(3000);
  });

  it('click Module-class rồi click Create-button', () => {
    cy.get('i.far.fa-users-class.moduleIconBlack')
      .click({ force: true });
    cy.get('i.far.fa-plus').click({ force: true });
    // kiểm tra chắc chắn đã vào form Create Class
    cy.get('form#EditView', { timeout: 20000 }).should('be.visible');
    cy.get('form#EditView').within(() => {
      cy.get('input[name="name"]').should('be.visible'); // field bắt buộc trong form
    });
  });
});