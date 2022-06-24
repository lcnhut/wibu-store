/* eslint-disable no-undef */
describe('Add product At Collection page', () => {
  it('Visit our admin page!', () => {
    cy.visit('http://localhost:3000/collection/', {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('role', '');
      },
    });
  });
  it('Should add success a product at collection', () => {
    cy.wait(1000)
      .get('.single__product__image__boxmodal')
      .eq(0)
      .trigger('mouseover');
    cy.get(
      '.single__product__wrapper .single__product__image .single__product__image__contain .single__product__image__boxmodal .single__product__icon span .single__product__icon__item'
    )
      .eq(1)
      .click();
    cy.get('.ant-input-number-input-wrap').click().type('10');
    cy.get('.add-to-cart__btn').click();
    cy.get('.ant-badge').click();
    cy.get('.cart_field__footer__button').click();
  });
});
