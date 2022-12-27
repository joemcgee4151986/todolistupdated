describe("Loading the homepage", function() {

    it("successfully loads", function() {
  
      cy.visit("https://leonreview1.netlify.app/")
      cy.viewport(390,844)
  
    })
  
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    if (err.message.includes('list not defined')) {
      return false
  
    }
})

