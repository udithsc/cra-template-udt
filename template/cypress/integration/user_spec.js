import { cyan } from '@mui/material/colors';

describe('user view', () => {
  it('admin can add a new user record', () => {
    // login
    cy.visit('http://localhost:3000/auth');
    cy.findByRole('textbox', { name: /email address/i }).type('test@test.com');
    cy.findByLabelText(/password/i).type('test');
    cy.findByRole('button', { name: /sign in/i }).click();

    // click users in side bar
    cy.get('[data-testid="users-menu"] > .MuiListItemIcon-root').click();

    // click add new button
    cy.findByRole('button', { name: /add new/i }).click({ force: true });

    // fill the form and save
    cy.findByRole('textbox', { name: /name/i }).type('test');
    cy.findByRole('textbox', { name: /email/i }).type('test@test.com');
    cy.findByRole('textbox', { name: /mobile/i }).type(11111111);
    cy.findByRole('button', { name: /submit/i }).click();
  });
});
