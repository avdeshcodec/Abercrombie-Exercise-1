
import usersPageObjects from "../page-objects/usersPageObjects";

Cypress.Commands.add("showMore", () => {
    cy.get(usersPageObjects.toggleBtn).each(($el, index, $list) => {
        cy.wrap($el).click();
        cy.get(usersPageObjects.moreDetails).eq(index).should('be.visible');
    })
});

Cypress.Commands.add("showLess", () => {
    cy.get(usersPageObjects.toggleBtn).each(($el, index, $list) => {
        cy.get($el).click();
        cy.get(usersPageObjects.moreDetails).eq(index).should('not.be.visible');
    })
});
