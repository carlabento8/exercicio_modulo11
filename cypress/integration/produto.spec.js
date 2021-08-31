/// <reference  types="cypress" />


describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Selecionar produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it.only('Adicionar um produto ao carrinho', () => {
        var quantidade = 5


        cy.get('[class="product-block grid"]')
        .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    
       
    
    });

});