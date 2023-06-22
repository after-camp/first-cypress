describe('text input', () => {
    it('types in an email input', () => {
        cy.visit("https://example.cypress.io/commands/querying");
        cy.get('#inputEmail').type('morishjs@gmail.com');
    });

    it('types in a password input', () => {
        cy.visit("https://example.cypress.io/commands/querying");
        cy.get('#inputPassword').type('1234');
    });
})
