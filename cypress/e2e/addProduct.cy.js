/* eslint-disable no-undef */
describe('Add product', () => {
  window.localStorage.setItem('role', 'admin');
  it('Visit our admin page!', () => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('role', 'admin');
      },
    });
  });

  it('should add successful a product', () => {
    cy.get('.ant-btn.ant-btn-primary.ant-btn-background-ghost').click();
    cy.get('#control-hooks_name').click().type('New product');
    cy.get('#control-hooks_price').click().type('160');
    cy.get('#control-hooks_images_0_src')
      .click()
      .type(
        'http://img.mwc.com.vn//Upload/2022/06/z3476015760940-a0db3b5573397fae42f90d1afd262627.jpg'
      );
    cy.get('.ant-btn.ant-btn-dashed').eq(0).click();
    cy.get('#control-hooks_images_1_src')
      .click()
      .type(
        'http://img.mwc.com.vn//Upload/2022/06/z3476015760940-a0db3b5573397fae42f90d1afd262627.jpg'
      );
    cy.get('#control-hooks_colors_0_color').click().type('Blue');
    cy.get('#control-hooks_colors_0_size').click().type('36');
    cy.get('#control-hooks_colors_0_quantity').click().type('20');
    cy.get('.ant-modal-footer .ant-btn.ant-btn-primary').eq(0).click();
  });
});
