/// <reference types="Cypress" />

describe("Demo Blaze Stores", function() {

    it("Add to shoping cart", function() {
        cy.visit("https://www.demoblaze.com/")
        cy.get("a[href='prod.html?idp_=1']:nth-last-child(1)").click()
        cy.get(".name").should('have.text', "Samsung galaxy s6")
        cy.get(".btn.btn-success.btn-lg").click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added')
        })
        cy.on('window:confirm', () => true)
        cy.get("#nava").click()
        cy.get("#cartur").click()
        cy.get(".btn.btn-success").click()
        cy.formnPlaceOrder("panaTest", "Argentina", "CABA", "123456", "02", "2022")
        cy.get("div[class='sweet-alert  showSweetAlert visible'] h2")
        .should("have.text", "Thank you for your purchase!")
        cy.get(".confirm.btn.btn-lg.btn-primary").click()





    })

})