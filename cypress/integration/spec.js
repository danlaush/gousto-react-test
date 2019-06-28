describe('Gousto React Test', function() {
  it('Loads the homepage', function() {
    cy.visit('http://localhost:3600/')
    cy.get('h1').should('contain', 'Welcome')
  })

  it('Loads the about page', function() {
    cy.visit('http://localhost:3600/about-us/')
    cy.get('h1').should('contain', 'Gousto')
  })

  it('Task 1: As a user I want to see all available product categories', function() {
    cy.visit('http://localhost:3600/')
    cy.get('.ProductCategories__list li')
      .its('length')
      .should('be.gt', 2)
  })

  it('Task 2: As a user I want to see a list of products titles', function() {
    cy.visit('http://localhost:3600/')
    cy.get('.Products__list li')
      .its('length')
      .should('be.gt', 2)
  })

  it('Task 3: As a user I want to see the products for the selected category', function() {
    cy.visit('http://localhost:3600/')
    cy.contains('button', 'Drinks Cabinet')
      .scrollIntoView()
      // TODO: Figure out why cypress doesn't like my side-scrolling list
      .click({force:true})
      // .click() results in this error:
      // <button class="ProductCategories__button">Drinks ...</button>
      // is being covered by another element:
      // <ul class="ProductCategories__list">...</ul>
    
    cy.get('.Products__list li')
      .should('contain', 'Borsao Macabeo')
      .should('contain.not', 'Shortbread')
  })

  it('Task 4: As a user I want to be able to search in the product title', function() {
    cy.visit('http://localhost:3600/')
    cy.get('input.ProductSearch')
      .type('Borsao')
    
    cy.get('.Products__list li')
      .should('contain', 'Borsao Macabeo')
      .should('contain.not', 'Shortbread')
  })

  it('Task 4.2: As a user I want to be able to search in the product description', function() {
    cy.visit('http://localhost:3600/')

    cy.get('input.ProductSearch')
      .type('flavoursome')

    // Confirm the search goes through text by confirming
    // that a result we know has the word in the description (not title)
    cy.get('.Products__list li')
      .should('contain', 'Borsao Macabeo')
      .should('contain.not', 'Shortbread')
  })

  it('Task 4.3: As a user I want to be able to clear a search', function() {
    cy.visit('http://localhost:3600/')

    cy.get('input.ProductSearch')
      .type('flavoursome')

    // Confirm the search goes through text by confirming
    // that a result we know has the word in the description (not title)
    cy.get('.Products__list li')
      .should('contain', 'Borsao Macabeo')
      .should('contain.not', 'Shortbread')

    cy.get('button.ProductSearch__clear')
      .click()

    cy.get('.Products__list li')
      .should('contain', 'Shortbread')
  })

  it('Task 5: As a user I want to be able to see the product description when I click on the product name', function() {
    cy.visit('http://localhost:3600/')
    
    cy.get('.Products__list li')
      .should('contain', 'Borsao Macabeo')
      .should('contain.not', 'indigenous Macabeo grape')

    cy.contains('button', 'Borsao Macabeo')
      .click()
    
    cy.get('.Products__list li')
      .should('contain', 'indigenous Macabeo grape')
  })

  it('Task 6: As a user I want to be able to navigate with the browser\'s native back and forward buttons', function() {
    cy.visit('http://localhost:3600/')
    
    cy.get('.Products__list li')
      .should('contain', 'Borsao Macabeo')

    cy.contains('button', 'Drinks Cabinet')
      .click({force:true})
    
    cy.url().should('include', 'faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9')

    cy.contains('button', 'Large Alcohol')
      .scrollIntoView()
      .click({force:true})

    cy.url().should('include', '785741fc-3854-11e6-87a5-06f9522b85fb')

    cy.go('back')

    cy.url().should('include', 'faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9')

    cy.go('forward')

    cy.url().should('include', '785741fc-3854-11e6-87a5-06f9522b85fb')
  })
})