describe('$scroll', () => {
  it('can scroll to top', () => {
    cy.visit('/examples/$scroll/index.html')
    cy.scrollTo('bottom')
    cy.window().its("scrollY").should(($scrollY) => {
      expect($scrollY).to.not.equal(0)
    })
    cy.get('#btn1').click()
    cy.window().its("scrollY").should(($scrollY) => {
      expect($scrollY).to.equal(0)
    })
  })
})
