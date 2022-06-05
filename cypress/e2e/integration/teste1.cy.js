/// <reference types="cypress" />

context('Teste Cypress WEBJUMP', () => {
    beforeEach(() => {
        cy.visit('https://wj-qa-automation-test.github.io/qa-test/')
    })

    //Caso de teste 01: Acessando o site e clicando no botão One, Two e no link Four e realizando a validação de que os botões não se encontram mais na pagina

    it('Teste1', () => {
        cy.get('#btn_one').click()
        cy.get('#btn_two').click()
        cy.get('#btn_link').click()

        cy.contains('#btn_one','#btn_two','#btn_link').should('not.exist')
    })
    
})