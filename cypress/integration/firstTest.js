/// <reference types="cypress" />

context('My first test', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
      cy.visit('https://www.google.com/')
    })
  
    it('Assignment task', () => {
        // search for 'stibo systems' string
        cy.get('form').find('[type="text"]').type('stibo systems{enter}')
        // click the link leading to 'www.stibosystems.com
        cy.get('[href="https://www.stibosystems.com/"] > .LC20lb').click()
        // click search and type 'energy'
        cy.get('.sb-nav-search-toggle > svg').click()
        cy.get('#sbNavSearchInput').should('be.visible').type('energy')
        //return in console number of found results
        cy.get('.ais-stats--body').invoke('text').then((text) => {
          cy.log(text)
        })
        // go to company -> about us
        cy.get(':nth-child(5) > .sb-nav-main-link').trigger('mouseover')
        cy.get('div.sb-nav-main-drop-col.col-1').contains('About Us').click({force: true})
        // assert that facebook icon is presnt on the page
        cy.get('ul.sb-footer-social').find('#Fill-560')
        // click on 'blog' link
        cy.get('.sb-nav-upper-link:nth-of-type(2)').click()
        // in 'follow blog' email input field provide email with incorrect format, return in console error msg
        cy.get('[type=email]').type('joe2{enter}')
        cy.get('[type="email"]').then(($input) => {
            cy.log($input[0].validationMessage)
          })
        // in 'follow blog' email input fild provide correct email and click send
        cy.get('[type=email]').clear().type('joe2joe@gmail.com')
        cy.get('[type="checkbox"]').check() 
        cy.get('[type="submit"]').click()
        // assert that 'thanks for subscribing!' msg was returned
        cy.get('.submitted-message').should('have.text', 'Thanks for Subscribing!')
    })
  })

 
  