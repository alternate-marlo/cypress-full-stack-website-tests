/// <reference types="cypress" />

import { qase } from 'cypress-qase-reporter/dist/mocha';

describe('Gatsby blog', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  qase(
    1,
    it('loads home page', () => {
      cy.get('main > div > h1');
    })
  );

  qase(
    [2, 3],
    it('navigates to second page and back', () => {
      cy.contains('a', 'Go to page 2').click();
      cy.url().should('match', /page-2/);
      cy.contains('main > h1', 'Hi from the second page');
      cy.contains('a', 'Go back to the homepage').click();
      cy.url().should('include', Cypress.config('baseUrl'));
    })
  );
});
