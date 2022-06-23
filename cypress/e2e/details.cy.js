describe('Add to cart from details page', () => {
  it('Got to our home page!', () => {
    cy.visit('http://localhost:3000/');
  });
  it('should add to cart success', () => {
    cy.wait(1000);
    cy.get('.single__product__content__link').eq(0).click();
    // cy.get('.ant-form-item-control-input').eq(2).click();
    // cy.get('.ant-select-selection-item').eq(2).click();
    cy.get('.ant-form.ant-form-horizontal .ant-select-selector').eq(0).click();
    cy.get('.ant-select-selection-item').eq(0).click();
    cy.get('.ant-form.ant-form-horizontal .ant-select-selector').eq(1).click();
    cy.get('.ant-select-selection-item').eq(0).click();
    cy.get('#qty').click().type('5');
    cy.get('.ant-form.ant-form-horizontal .ant-btn.ant-btn-default').click();
  });
});
