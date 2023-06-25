describe('musinsa', () => {
    it.skip('should login', () => {
        cy.visit("https://www.musinsa.com/auth/login?referer=http%3A%2F%2Fwww.musinsa.com%2Fapp%2Fmypage");
        cy.get('[name="id"]').type('abcd')
            .then($input => {
                expect($input.val()).to.be.eq('morish');
            })
        cy.get('[name="pw"]').type('2331456241')

        cy.get('.login-form [type="submit"]').click();
    });

    it.skip("selects an option", () => {
        cy.visit("https://www.musinsa.com/app/goods/3361386?loc=goods_rank");
        cy.get('#option1').select("2")
        cy.get("#buy_option_area > div.box-btn-buy.wrap-btn-buy > div.btn_buy > a").click();
    })

    it('should click an item', () => {
        cy.visit('https://www.musinsa.com/member/find/id?referer=https%3A%2F%2Fwww.musinsa.com%2Fbrands%2Fsnowpeakapparel');
        cy.get('[for="radioEmail"]').click()

        cy.get('#inputEmai')
    })
})
