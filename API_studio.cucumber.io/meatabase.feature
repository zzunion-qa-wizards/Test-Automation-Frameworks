Feature: Meatabase
    Feature: API Testing

  Scenario: Login Functionality
    * Scenario: Login with Empty Username Given the user is on the login page at "http://localhost:3000/auth/login?redirect=%2F" When they leave the username field empty And enter a valid password And click the "Login" button Then they should see an error message indicating the username is required

  Scenario: Login with Wrong Username
    * Scenario: Login with Wrong Username Given the user is on the login page at "http://localhost:3000/auth/login?redirect=%2F" When they enter an incorrect username And enter a valid password And click the "Login" button Then they should see an error message indicating the username is incorrect

  Scenario: Scenario: Login with Wrong Password
    * Scenario: Login with Wrong Password Given the user is on the login page at "http://localhost:3000/auth/login?redirect=%2F" When they enter a valid username And enter an incorrect password And click the "Login" button Then they should see an error message indicating the password is incorrect

  Scenario: Login with Empty Password
    * Scenario: Login with Empty Password Given the user is on the login page at "http://localhost:3000/auth/login?redirect=%2F" When they enter a valid username And leave the password field empty And click the "Login" button Then they should see an error message indicating the password is required

  Scenario: Create the New User
    * Scenario: Create New User via API Given a user provides valid user data When a POST request is sent to create a new user via the API at "http://localhost:3000/auth/login?redirect=%2F" Then the response status code should be 201 And the user should be created successfully
