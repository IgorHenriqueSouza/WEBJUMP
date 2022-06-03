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

    //Caso de teste 03:Preenchendo o campo YouFirstName, clicando no botão One, dando um check na opção OptionThree, selecionando a opção ExemploTwo e validando a presença da imagem do logo Selenium Webdriver
    it('Teste3', () => {
      cy.get('#first_name').focus().type('WEBJUMP UHULLL!!')
      cy.get('#btn_one').click()
      cy.get('#opt_three').check()
      cy.get('#select_box').select('ExampleTwo')
      cy.get('[alt="selenium"]').should('be.visible')
    })
    
})