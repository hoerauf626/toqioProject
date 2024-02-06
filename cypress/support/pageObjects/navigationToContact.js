export class navigationToContact {
  toContactPage() {
    cy.get(".margin-top-60 > .container > .btn").click({ timeout: 3000 });
    cy.contains("Reject All").click();
  }
}

export const nav = new navigationToContact();
