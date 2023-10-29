// This is the Cypress test case for "Create a New Alert."

describe('Create a New Alert Test', () => {
  it('TC_GUI_02 - Create a New Alert', () => {
    // 1. Log in to Metabase.
    cy.visit('http://localhost:3000/');
    cy.get('#username').type('Muhammad Umer'); 
    cy.get('#password').type('Assasion7574');
    cy.get('button').contains('Log In').click();
    

    cy.contains('Alerts').click();

    // 3. Click on "New Alert".
    cy.contains('New Alert').click();

    // 4. Fill in the required information.
    cy.get('#alertName').type('New Alert Name'); // Replace with alert name.
    // Fill in other required fields.

    // 5. Save the alert.
    cy.contains('Save').click();

    // Assertion: Check if the new alert is created successfully.
    cy.contains('New Alert Name'); // Replace with the name you used for the alert.
    // Add more assertions to verify the new alert details as needed.
  });
});
