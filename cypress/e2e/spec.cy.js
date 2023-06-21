describe('Button click', () => {
  it('clicks a button', () => {
    cy.visit('https://example.cypress.io/commands/querying');
    cy.get('#query-btn').click();
  })

  it('clicks a button at https://www.musinsa.com/app/', () => {
    cy.visit('https://www.musinsa.com/app/');

    cy.get('#ranking_goods_pager > li:nth-child(3) > a').click();
    cy.wait(2000);
    cy.get('#ranking_goods_pager > li:nth-child(4) > a').click();
    cy.wait(2000);
    cy.get('#ranking_goods_pager > li:nth-child(5) > a').click();
  });
});
