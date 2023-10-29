/// <reference types="Cypress" />

describe('Launch Application', () => {
  it('Launch the Test Aplication', () => {
    cy.visit('https://www.saucedemo.com/v1/')
  })
})

