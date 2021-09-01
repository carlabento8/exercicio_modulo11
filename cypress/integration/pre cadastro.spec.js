/// <reference  types="cypress" />
var faker = require('faker');

describe('Funcionalidade Pre cadastro', () => {

    before(() => {
        cy.visit('minha-conta')
    });
    
    it.only('Completar cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)


        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste001@teste')
        cy.get(':nth-child(4) > .button').click()   

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })


    it('Completar o pré cadastro com sucesso - Usando comendandos customizados', () => {
        let emailFaker2 = faker.internet.email()
        cy.preCadastro(emailFaker2 , 'senha@forte123', 'Carla', 'Bento')
    });

});