describe('Crm-report', () => {
  it('Search report of Duy', () => {
    // Mở trang Google
    cy.visit('https://crm.scotsenglish.edu.vn');

    // Đăng nhập
    cy.get('input[name="username"]').type('duyld@scotsenglish.com', { force: true });
    cy.get('input[name="password"]').type('Scots@2025', { force: true });
    cy.get('a[name="login_button"]').click({ force: true });

    cy.wait(4000);
    // Vào báo cáo

    //cy.get('li[data-module="Leads"]').click({ force: true });
    //cy.get('li[data-module="Leads"]').first().click();
   //cy.get('li[data-module="Reports"]').first().click({ force: true });
   cy.get('i.far.fa-analytics.moduleIconBlack').click({ force: true });

   cy.get('.filter-view .search-name').type('[Duyld]{enter}');

  });
});