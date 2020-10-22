describe("testing form inputs", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/#/")
    })
    it("tests", () => { 
        cy.get('h2').contains('Sign Up!');
        cy.get('input[id="name"]').type('Rams Nas')
        cy.get('input[id="password"]').type('R23N*')
        cy.get('input[id="email"]').type('ramnas@gmail.com')
        cy.get('input[name="checked"]').type('true')

    });
})