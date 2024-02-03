describe('Testing sauce', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/');
    });

    it('Visit site', () => {
        cy.visit('https://example.cypress.io/');
    });

    it('Test link', () => {
        cy.containts('Querying').click()
    })

    it('Test button', () => {
        cy.get('.query-btn').should('contain', 'Button')

        cy.get('#querying .well>button:first').should('contain', 'Button')
    })

    it('Test form', () => {
        cy.get('.query-form').within(() => {
            cy.get('input:first').should('have.attr', 'placeholder', 'Email')

            cy.get('input:last').should('have.attr', 'placeholder', 'Password')
        })
    })

    it('Test contain', () => {
        cy.get('.query-list')
            .contains('bananas').should('have.class', 'third')

        cy.get('.query-list')
            .contains(/^b\w+/).should('have.class', 'third')

        cy.get('.query-list')
            .contains('apples').should('have.class', 'first')

        cy.get('#querying')
            .contains('ul', 'oranges')
            .should('have.class', 'query-list')

        cy.get('.query-button')
            .contains('Save Form')
            .should('have.class', 'btn')
    })

    it('Test', () => {
        cy.root().should('match', 'html')

        cy.get('.query-ul').within(() => {
            cy.root().should('have.class', 'query-ul')
        })
    })
});