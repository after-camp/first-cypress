import cafe24Factory from "../support/cafe24";

describe('cafe24', () => {
    it.skip('should buy an item', () => {
       const {login, goToProductDetailPage} = cafe24Factory()

        login();
        goToProductDetailPage();

        cy.get('#btnBuy').click();
    })

    it.skip('장바구니 추가', () => {
        const {login, goToProductDetailPage} = cafe24Factory();
        login();
        goToProductDetailPage();

        cy.get('.move.sub_cart').click();
    })

    it('관심상품 선택', (done) => {
        const {login, goToProductDetailPage} = cafe24Factory()

        login();
        goToProductDetailPage();

        cy.get('.move.sub_wish').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('관심상품으로 등록되었습니다.');
            done();
        });
    })
});
