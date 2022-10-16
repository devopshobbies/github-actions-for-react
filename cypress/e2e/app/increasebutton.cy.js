
describe('basic ui', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-testid="increasing-btn"').as('incBtn')


    })
    it('onClick increase button', function() {

        cy.get('@incBtn').click()
        
        cy.get('@incBtn').should('have.text', "count is 1")
    })
})
