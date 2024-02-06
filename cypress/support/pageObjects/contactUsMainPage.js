export class contactUsMainPage {
  firstName(text) {
    cy.get("#firstname-45092bb0-9980-45b3-bf08-01bc672cf116").type(text);
  }

  verifyText() {
    cy.contains("Please complete this required field").should("be.visible");
  }
  clearFirst() {
    cy.get("#firstname-45092bb0-9980-45b3-bf08-01bc672cf116").clear();
  }
  notExist() {
    cy.contains("Please complete this required field").should("not.exist", {
      timeout: 8000,
    });
  }
  lastName(text) {
    cy.get("#lastname-45092bb0-9980-45b3-bf08-01bc672cf116").type(text);
  }
  clearLast() {
    cy.get("#lastname-45092bb0-9980-45b3-bf08-01bc672cf116").clear();
  }
  email(text) {
    cy.get("#email-45092bb0-9980-45b3-bf08-01bc672cf116").type(text);
  }
  clearEmail() {
    cy.get("#email-45092bb0-9980-45b3-bf08-01bc672cf116").clear();
  }
  verifyEmailError() {
    cy.contains("Email must be formatted correctly").should("be.visible");
  }
  phone(text) {
    cy.get("#phone-45092bb0-9980-45b3-bf08-01bc672cf116").type(text);
  }
  clearPhone() {
    cy.get("#phone-45092bb0-9980-45b3-bf08-01bc672cf116").clear();
  }
  verifyPhoneError() {
    cy.contains(
      "A valid phone number may only contain numbers, +()-. or x"
    ).should("be.visible");
  }
  verifySecondPhoneError() {
    cy.contains("The number you entered is not in range.").should("be.visible");
  }
  company(text) {
    cy.get("#company-45092bb0-9980-45b3-bf08-01bc672cf116").type(text);
  }
  clearCompany() {
    cy.get("#company-45092bb0-9980-45b3-bf08-01bc672cf116").clear();
  }
  verifyCompanyError() {
    cy.contains;
  }
  headquarters(text) {
    cy.get(
      "#location_of_headquarters-45092bb0-9980-45b3-bf08-01bc672cf116"
    ).select(text);
  }
  verifyHeadquarters() {
    cy.contains("Spain").should("be.visible");
  }
  hearAboutUs(text) {
    cy.get(
      "#how_did_you_hear_about_us_-45092bb0-9980-45b3-bf08-01bc672cf116"
    ).select(text);
  }
  verifyHearAboutUsText() {
    cy.contains("Event").should("be.visible");
  }
  firstCheckBox() {
    cy.get(
      'input[id="LEGAL_CONSENT.subscription_type_46630711-45092bb0-9980-45b3-bf08-01bc672cf116"]'
    ).check();
  }
  verifyFirstCheckox() {
    cy.get(
      'input[id="LEGAL_CONSENT.subscription_type_46630711-45092bb0-9980-45b3-bf08-01bc672cf116"]'
    ).should("be.checked");
  }
  secondCheckbox() {
    cy.get(
      'input[id="LEGAL_CONSENT.subscription_type_13029907-45092bb0-9980-45b3-bf08-01bc672cf116"]'
    ).should("not.be.selected");
  }
  sendButton() {
    cy.get(".hs-button").click();
  }
}

export const page = new contactUsMainPage();
