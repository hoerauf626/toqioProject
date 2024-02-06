export class toSpanish {
  selectLang() {
    cy.get('[href="https://toqio.co/es?p&"]').click();
    cy.contains("Reject All").click();
  }
  verifyFirstText() {
    cy.contains("La plataforma de finanzas integradas").should("be.visible");
  }
  verifySecondText() {
    cy.contains(
      '¿Por qué invertir años y millones desarrollando una aplicación que sólo está "bien"?'
    ).should("be.visible");
  }
  verifyThirdText() {
    cy.contains("Toqio ofrece ventajas importantes").should("be.visible");
  }
  verifyFourthText() {
    cy.contains("El ecosistema de Toqio").should("be.visible");
  }
  verifyFifthText() {
    cy.contains(
      "Inspírate para integrar herramientas de finanzas fácilmente en el ecosistema digital de tu organización"
    );
  }
  verifySixthText() {
    cy.contains("Toqio en los medios").should("be.visible");
  }
  verifyReadMoreLinks() {
    cy.get(".news_article_link").should("have.length", 4);
  }
  verifySpainFlag() {
    cy.get('[href="#"] > .fi').should("be.visible");
  }
}

export const es = new toSpanish();
