Given("the user is on the login page", () => {
    cy.visit("http://localhost:3000/auth/login?redirect=%2F");
  });
  
  When("the user enters an incorrect username", () => {
    cy.get("#username").type("incorrectUsername");
  });
  
  When("enters a valid password", () => {
    cy.get("#password").type("yourValidPassword");
  });
  
  When("clicks the login button", () => {
    cy.get("#loginButton").click();
  });
  
  Then("an error message for the wrong username should be displayed", () => {
    cy.get(".error-message-username").should("exist");
  });
  