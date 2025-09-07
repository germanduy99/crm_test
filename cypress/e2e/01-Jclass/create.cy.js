describe('Create-Class', () => {
  before(() => {
    cy.visit('https://stagingcrm.scotsenglish.edu.vn');
    cy.get('input[name="username"]').type('anhtt@scotsenglish.com', { force: true });
    cy.get('input[name="password"]').type('Tienanh23997@', { force: true });
    cy.get('a[name="login_button"]').click({ force: true });
    cy.wait(3000);
  });
  it('Không hiển thị popup cảnh báo nếu không thay đổi gì trong form', () => {
    cy.get('i.far.fa-users-class.moduleIconBlack').click({ force: true });
    cy.get('i.far.fa-plus').click({ force: true });
    // ✅ Kiểm tra popup không xuất hiện
    cy.get('i.far.fa-exclamation-triangle').should('not.exist');
  });
});