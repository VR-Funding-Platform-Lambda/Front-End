describe("Login Input Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/#/sign-in")
  })
  it("Form Test", () => {
    cy.get('input[type="email"]').type('email@email.com')
    cy.get('input[type="password"]').type('secretPassword')
    cy.get('Button[id=submit]').click()
  });
})