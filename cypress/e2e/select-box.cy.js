describe('select box', () => {
    it('selects an option', () => {
        cy.visit("https://example.cypress.io/commands/actions");
        cy.get('#actions > div > div:nth-child(32) > div > form > select.form-control.action-select')
            .select('apples')
    })
});
