describe('musinsa', () => {
    it('should login', () => {
        cy.visit("https://www.musinsa.com/auth/login?referer=http%3A%2F%2Fwww.musinsa.com%2Fapp%2Fmypage");
        cy.get('body > div.container.login > section.content.content--no-interval > div.login-member > form > div.login-member__form > div:nth-child(10) > div > input').type('park53kr')
        cy.get('body > div.container.login > section.content.content--no-interval > div.login-member > form > div.login-member__form > div:nth-child(11) > div > input').type('2331456241')

        cy.get('body > div.container.login > section.content.content--no-interval > div.login-member > form > div.login-button.login-button--static > button').click();
    });

    it("selects an option", () => {
        cy.visit("https://www.musinsa.com/app/goods/3361386?loc=goods_rank");
        cy.get('#option1').select("2")
        cy.get("#buy_option_area > div.box-btn-buy.wrap-btn-buy > div.btn_buy > a").click();
    })
})
