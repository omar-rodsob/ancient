import SpecPage from './pages/specPage';
import user from '../fixtures/user.json';

describe('template spec', () => {
  it('Fill Form', () => {
  
    cy.visit('');
    cy.wait(3000);
    SpecPage.clickApply();
    SpecPage.elements.applyTab().should('have.attr','data-selected');
    SpecPage.selectFile('cypress/fixtures/OmarRodriguez-Resume.pdf');
    cy.wait(3000);
    SpecPage.elements.resumeLabel().should('have.text','OmarRodriguez-Resume.pdf');
    SpecPage.typeFullName(`${user.firstName} ${user.lastName}`);
    SpecPage.typeEmail(user.email);
    SpecPage.selectCountry(user.country);
    SpecPage.pressMexico();
    SpecPage.elements.phone().should('have.value','+52');
    SpecPage.typePhone(user.phone);
    SpecPage.switchCoverLetter();
    SpecPage.elements.coverLetter().should('be.visible');
    SpecPage.typeCoverLetter(user.coverLetter);
    SpecPage.typeManualEx(user.manualExp);
    SpecPage.typeApiExp(user.apiExp);
    SpecPage.typesalary(user.salary);
    SpecPage.typeBecomePart(user.becomePart);
    SpecPage.typeAdvertised(user.advertised);
    SpecPage.clickSubmit();    
  })
})