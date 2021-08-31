/// <reference  types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade login', () => {

    before(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Fazer login com sucesso', () => {
        cy.get('#username').type('Florencio25@hotmail.com')
        cy.get('#password').type('teste001@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')

    })

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
    });


    it.only('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()

            cy.get('.page-title').should('contain', 'Minha conta')
        })
    });


    it('Exibir mensagem de erro para e-mail inválido', () => {
        cy.get('#username').type('luno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })

    it('Exibir mensagem de erro para senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('este@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })

})
