class SpecPages{
    elements ={
        applyButton: ()=>cy.get('[data-cy="apply-button-nav"]'),
        applyTab:()=>cy.get('[aria-controls="tabs--23--panel--1"]'),
        fullName:()=>cy.get('[name="candidate[name]"]'),
        resumeFile:()=>cy.get('[data-cy="fileInputField"]'),
        resumeLabel:()=>cy.get('[title="OmarRodriguez-Resume.pdf"]'),
        cLetterSwitch:()=>cy.get('[data-cy="cover-letter-switch-button"]'),
        coverLetter:()=>cy.get('[data-cy="candidate[coverLetterText]"]'),
        email:()=>cy.get('[name="candidate[email]"]'),
        phone:()=>cy.get('[type="tel"]'),
        location:()=>cy.get('[id="country-select-9"]'),
        mxDiv:()=>cy.contains('Mexico'),
        manualTestingExp:()=>cy.get('#18'),
        apiTestingExp:()=>cy.get('#19'),
        salaryExpetation:()=>cy.get('#20'),
        bePartOfAcientGaming:()=>cy.get('#21'),
        positionAdvertised:()=>cy.get('#22'),
        submitButton:()=>cy.get('[type="submit"]')
    }

    clickApply(){
        this.elements.applyButton().click();
    }

    selectFile(filePath){
        this.elements.resumeFile().selectFile(filePath,{force: true });
    }

    typeFullName(name){
        this.elements.fullName().type(name);
    }

    typeEmail(email){
        this.elements.email().type(email);
    }

    selectCountry(country){
        this.elements.location().click().type(country);
    }

    pressMexico(){
        this.elements.mxDiv().click({force: true});
    }

    typePhone(phone){
        this.elements.phone().type(phone);
    }

    switchCoverLetter(){
        this.elements.cLetterSwitch().click();
    }

    typeCoverLetter(cLetter){
        this.elements.coverLetter().type(cLetter);
    }

    typeManualEx(manualexp){
        this.elements.manualTestingExp().type(manualexp);
    }

    typeApiExp(apiexp){
        this.elements.apiTestingExp().type(apiexp);
    }

    typesalary(salary){
        this.elements.salaryExpetation().type(salary);
    }

    typeBecomePart(bepart){
        this.elements.bePartOfAcientGaming().type(bepart);
    }

    typeAdvertised(advertised){
        this.elements.positionAdvertised().type(advertised);
    }
    
    clickSubmit(){
        this.elements.submitButton().click();
    }
}
export default new SpecPages();