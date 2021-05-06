/// <reference types="cypress" />

describe('Testes de regressão visual', () => {

  it('Meu primeiro teste visual', () => {

    cy.visit('https://ronunes-proffyaglz.netlify.app/');
    cy.get('.hero-image').should('be.visible');
		cy.percySnapshot();

  });
});

