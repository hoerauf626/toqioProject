/// <reference types="cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import {
  nav,
  navigationToContact,
} from "../../support/pageObjects/navigationToContact";
import { page } from "../../support/pageObjects/contactUsMainPage";
import { es } from "../../support/pageObjects/mainPageForTranslation";

Given("I open Toqio homepage", () => {
  cy.visit("/");
});

When(
  "I navigate to the contact page and test fields firstname, lastname, email and phone number",
  () => {
    nav.toContactPage();
    page.firstName(" ");
    page.verifyText();
    page.clearFirst();
    page.firstName("123456");
    page.notExist();
    page.clearFirst();
    page.firstName("!@#$%^");
    page.clearFirst();
    page.firstName(
      "ThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongname"
    );
    page.clearFirst();
    page.verifyText();
    page.firstName("test");
    page.lastName(" ");
    page.verifyText();
    page.clearLast();
    page.lastName("123456");
    page.notExist();
    page.clearLast();
    page.lastName("!@#$%^");
    page.clearLast();
    page.lastName(
      "ThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongname"
    );
    page.clearLast();
    page.verifyText();
    page.lastName("User");
    page.email(" ");
    page.verifyText();
    page.clearEmail();
    page.email("!@#$%^");
    page.verifyEmailError();
    page.clearEmail();
    page.email("123456");
    page.verifyEmailError();
    page.clearEmail();
    page.email(
      "test@ThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongname"
    );
    page.verifyEmailError();
    page.clearEmail();
    page.email("test@toq.io");
    page.phone(" ");
    page.phone("!@#$%^");
    page.verifyPhoneError();
    page.clearPhone();
    page.phone("abcdef");
    page.verifyPhoneError();
    page.clearPhone();
    page.phone(
      "123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789"
    );
    page.verifySecondPhoneError();
    page.clearPhone();
    page.phone("1");
    page.verifySecondPhoneError();
    page.clearPhone();
    page.phone("+34_123_456_789");
    page.verifyPhoneError();
    page.clearPhone();
    page.phone("+34-123-456-789");
  }
);

And("I test the remaining fields", () => {
  page.company(" ");
  page.verifyText();
  page.clearCompany();
  page.company("!@#$%^");
  page.notExist();
  page.clearCompany();
  page.company("123456789");
  page.notExist();
  page.clearCompany();
  page.company(
    "ThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongnameThisisareallylongname"
  );
  page.notExist();
  page.clearCompany();
  page.company("TestCompany");
  page.headquarters("Spain");
  page.verifyHeadquarters();
  page.hearAboutUs("Event");
  page.verifyHearAboutUsText();
  page.firstCheckBox();
  page.verifyFirstCheckox();
  page.secondCheckbox();
});

Then("I click the Send Button", () => {
  page.sendButton();
});

When(
  "I select spanish from the dropdown and verify first part of home page",
  () => {
    es.selectLang();
    es.verifySpainFlag();
    es.verifyFirstText();
    es.verifySecondText();
    es.verifyThirdText();
  }
);
And("I verify the middle part of the home page", () => {
  es.verifyFourthText();
  es.verifyFifthText();
  es.verifySixthText();
});

Then("I verify the links and buttons", () => {
  es.verifyReadMoreLinks();
});
