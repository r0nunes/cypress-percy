/// <reference types="cypress" />

describe('Testes de regressão visual', () => {

  it('Meu primeiro teste visual', () => {

    cy.visit('http://localhost:3000/');
    cy.get('.hero-image').should('be.visible');
		cy.percySnapshot();

  });
});