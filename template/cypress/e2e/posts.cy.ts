describe('post', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it('should able to create a post', () => {
    cy.visit('http://localhost:3000/dashboard/posts');
    cy.get('button#addButton').click();
    cy.get('input#title').type('post title');
    cy.get('textarea#post').type('post body');
    cy.get('form').submit();
    cy.get('button#drawerCloseBtn').click();
    cy.get('div.Toastify').should('have.text', 'Post added successfully.');
  });
});
