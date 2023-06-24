describe('cafe24', () => {
    it('should buy an item', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit("https://morishjs.cafe24.com");
        cy.get('#header > div.right_area > div.icon_menber > img').trigger('mouseover');
        cy.get('#header > div.right_area > div.icon_menber > ul > li:nth-child(1) > a').click();

        cy.get('#member_id').type('junsukpark');
        cy.get('#member_passwd').type('5J27$I0HDWrr');

        cy.get('.btnLogin_bk').click();

        cy.get('#anchorBoxId_10 > div.thumbnail > div > a').click({
            force: true,
        });

        cy.get('#btnBuy').click();
    })
});
