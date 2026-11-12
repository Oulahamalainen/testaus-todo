describe('Todo app', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.reload();
  });

  it('creates and deletes a task', () => {
    cy.get('#topic').type('Write automated tests');
    cy.get('#priority').select('high');
    cy.get('#description').type('Run the test suite in CI');
    cy.get('#save-btn').click();

    cy.get('#task-list .task')
      .should('have.length', 1)
      .and('contain', 'Write automated tests');

    cy.on('window:confirm', () => true);
    cy.get('#task-list .task [data-action="delete"]').click();
    cy.get('#task-list .task').should('not.exist');
    cy.get('#empty-state').should('be.visible');
  });
});
