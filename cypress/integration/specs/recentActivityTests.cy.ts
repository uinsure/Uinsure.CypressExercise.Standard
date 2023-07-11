import homePage from '../../support/page-objects/home.page';
import loginPage from '../../support/page-objects/login.page';

let emailAddress: string;
let password: string;

const loginDetails = {
    emailAddress: 'john.doe@uinsure.co.uk',
    //enter password provided in the word document below
    password: '',
};

describe('as a Broker I should be able to search through my quotes so that I can find a quote related to a specific customer', () => {
    it('should be able to login', () => {
        cy.visit('/');
        cy.url().should('include', 'quotes.test');
        loginPage.email.type(loginDetails.emailAddress);
        loginPage.password.type(loginDetails.password);
        loginPage.signInButton.click();
        homePage.buildingsAndContents.should('be.visible');
    });
    it('should be able to navigate to the recent activity page', () => {
        homePage.recentActivityTab.click();
        homePage.quoteReference.should('be.visible');
    });
});
