describe('login', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it('user should able to login', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input#email') // 2.
      .type('user@example.com');
    cy.get('input#password') // 2.
      .type('password');
    cy.get('button') // 2.
      .click();
    cy.get('div#welcomeText').should('have.text', 'Welcome!');
  });
});
