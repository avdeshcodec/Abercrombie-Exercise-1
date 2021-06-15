
import usersPageObjects from "../page-objects/usersPageObjects";

let fixtureConfig;
describe("Users", function () {
    before(function () {
        cy.fixture('config').then(function (config) {
            fixtureConfig = config;   
        })
    });

    it('Should open users page', () => {
        cy.visit(fixtureConfig.userListingUrl);
        cy.get('h1').contains("User Profiles");
    });

    it('Should show users listing', () => {
        cy.get(usersPageObjects.itemsList).children().should('have.length', 0);
    });

    it('Should click on the show more button', () => {
        cy.showMore();
    });

    it('Should click on the show less button', () => {
        cy.showLess();
    });
});