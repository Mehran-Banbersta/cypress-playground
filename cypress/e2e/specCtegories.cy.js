it('Selecting a new category should deselect the old one', () => {
  cy.get('[data-testid="categories-list"]').within(() => {
    cy.get('[data-selected="true"]').should('have.length', 0);
  });

  cy.get('[data-testid="categories-list"]').within(() => {
    cy.get('[data-elementid="electronics"]').click();
  });

  cy.get('[data-testid="categories-list"]').within(() => {
    cy.get('[data-elementid="electronics"]').should(
      'have.attr',
      'data-selected',
      'true'
    );
  });

  cy.get('[data-testid="categories-list"]').within(() => {
    cy.get('[data-elementid="clothing"]').click();
  });

  cy.get('[data-testid="categories-list"]').within(() => {
    cy.get('[data-elementid="electronics"]').should(
      'have.attr',
      'data-selected',
      'false'
    );
    cy.get('[data-elementid="clothing"]').should(
      'have.attr',
      'data-selected',
      'true'
    );
  });
});
