describe('Add to cart from details page', () => {
  it('Got to our home page!', () => {
    cy.visit('http://localhost:3000/');
  });
  it('should add to cart success', () => {
    cy.wait(3000);
    cy.get('.single__product__content__link').eq(0).click();
    // cy.get('.ant-form-item-control-input').eq(2).click();
    // cy.get('.ant-select-selection-item').eq(2).click();
    cy.wait(3000);

    cy.get('#detailspage__form .ant-select-selector').eq(0).click();
    cy.wait(3000);

    cy.get('#detailspage__form .ant-select-selection-item').eq(0).click();
    cy.wait(3000);

    cy.get('#detailspage__form .ant-select-selector').eq(1).click();
    cy.wait(3000);

    cy.get('#detailspage__form .ant-select-selection-item').eq(0).click();
    cy.wait(3000);

    cy.get('#qty').click().type('5');
    cy.wait(3000);

    cy.get('#detailspage__form .ant-btn.ant-btn-default').click();
  });
});
