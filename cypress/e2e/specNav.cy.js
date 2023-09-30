describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://hyf-react-w2-example.netlify.app/');
  });

  it('Can go to the details page and back', () => {
    cy.get('[data-testid="product-link"]').first().click();
    cy.get('[data-testid="product-details-page"]').should('be.visible');
    cy.go('back');
    cy.get('[data-testid="products-page"]').should('be.visible');
  });

  it('Can navigate to a different product details page', () => {
    cy.get('[data-testid="product-link"]').eq(1).click();
    cy.get('[data-testid="product-details-page"]').should('be.visible');

    cy.go('back');
    cy.get('[data-testid="products-page"]').should('be.visible');

    cy.get('[data-testid="product-link"]').eq(2).click();
    cy.get('[data-testid="product-details-page"]').should('be.visible');
  });

  it('Can navigate to the details page and then go forward again', () => {
    cy.get('[data-testid="product-link"]').first().click();
    cy.get('[data-testid="product-details-page"]').should('be.visible');

    cy.go('forward');
    cy.get('[data-testid="product-details-page"]').should('not.exist');
    cy.get('[data-testid="products-page"]').should('be.visible');
  });

  it('Can navigate directly to a specific product details page', () => {
    cy.visit('https://hyf-react-w2-example.netlify.app/products/3');
    cy.get('[data-testid="product-details-page"]').should('be.visible');

    cy.go('back');
    cy.get('[data-testid="products-page"]').should('be.visible');
  });

  it('Can go back from a specific product details page to the products page', () => {
    cy.visit('https://hyf-react-w2-example.netlify.app/products/4');
    cy.get('[data-testid="product-details-page"]').should('be.visible');

    cy.get('[data-testid="back-button"]').click();
    cy.get('[data-testid="products-page"]').should('be.visible');
  });
});
