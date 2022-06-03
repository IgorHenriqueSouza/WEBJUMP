/// <reference types="cypress" />

context('Teste Cypress WEBJUMP', () => {
    beforeEach(() => {
        cy.visit('https://wj-qa-automation-test.github.io/qa-test/')
    })

    it('Acessando o site e clicando em One, Two, Four', () => {
        cy.get('#btn_one').click()
        cy.get('#btn_two').click()
        cy.get('#btn_link').click()

        cy.contains('#btn_one','#btn_two','#btn_link').should('not.exist')
    })
    it('Acessando o site e clicando em One, Two, Four', () => {
        cy.get('#btn_one').click()
        cy.get('#btn_two').click()
        cy.get('#btn_link').click()

        cy.contains('#btn_one','#btn_two','#btn_link').should('not.exist')
    })
    
})