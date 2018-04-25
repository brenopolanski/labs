describe('My First Test', function() {
  it('Go to Google Search and make a search', function() {
    cy.visit('https://www.google.com.br');

    cy.title().should('include', 'Google');

    cy.get('#lst-ib').type('cypress.io').should('have.value', 'cypress.io');

    cy.get('input[name="btnK"]').click();
  });
});
