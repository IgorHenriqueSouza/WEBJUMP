/// <reference types="cypress" />


context('Teste Cypress WEBJUMP', () => {
    beforeEach(() => {
        cy.visit('https://wj-qa-automation-test.github.io/qa-test/')
    })

    //Caso de teste 02: Clicando nos bitões one, two e Four que se encontram dentro de um iframe e validando a não presença deles

    it('Teste1', () => {

        cy.frameLoaded('iframe[src="buttons.html"]')
    /*     cy.iframe('iframe[src="buttons.html"]').find('#btn_one',).click()
        cy.iframe('iframe[src="buttons.html"]').find('#btn_two').click()
        cy.iframe('iframe[src="buttons.html"]').find('#btn_link').click()
 */
        cy.enter('iframe[src="buttons.html"]').then(getBody => {
            getBody().find('#btn_one').click()
            getBody().find('#btn_two').click()
            getBody().find('#btn_link').click()
          })
          cy.contains('#btn_one','#btn_two','#btn_link').should('not.exist')
    })
    
})