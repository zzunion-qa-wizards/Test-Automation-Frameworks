

describe('Notification Settings Page Test', () => {
  it('TC_GUI_01 - Verify Notification Settings Page', () => {
    // 1. Log in to Metabase.
    cy.visit('http://localhost:3000/'); 
    cy.get('#username').type('Muhammad Umer'); 
    cy.get('#password').type('Assasion7574'); 
    cy.get('button').contains('Log In').click();
   

    // 2. Navigate to Notification Settings.
    cy.contains('Notification Settings').click();


    cy.url().should('include', '/notification-settings'); 
    cy.get('h1').should('contain', 'Notification Settings'); 
  });
});
