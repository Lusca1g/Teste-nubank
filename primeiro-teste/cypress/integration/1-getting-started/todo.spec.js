/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Teste Formulario', () => {
  
  it('Preencher dados no formulario e enviar', () => {
    let cpf
    cy.origin('4devs.com.br', () => {
      cy.visit('/gerador_de_cpf')
      cy.get('[id=bt_gerar_cpf]').click()
      cy.get('[class="output-txt output-txt-active"]').invoke('text').then((text) => {
        Cypress.env('cpf', text)
        console.log(text)     
      })
     

    })   

    cy.origin('nubank.com.br', () => {
      cy.visit('/')
      cy.get('[name="cpf"]').type(Cypress.env('cpf'))
      cy.get('#short-form > button').click()
      cy.get('#field-name').type("Lulu")
      cy.get('#field-email').type("Lulu@hotmail.com")
      cy.get('[name="phone"]').type(3499999999)

    })
    
    
  })


 })
