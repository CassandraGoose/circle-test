/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('displays two todo items by default', () => {
    cy.get('h1').should('have.text', 'Hello World')
  })
})
