import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

// Deuxième test réécris d'une autre manière
// Étape pour ouvrir la page exemple
Given('I open example page', () => {
  cy.visit('https://example.com'); // Remplacez par l'URL que vous souhaitez ouvrir
});
// Vérifier que le titre de la page est visible
Then("I see page the title {string}",(name) => {
  cy.get('title').should('not.be.empty').contains('Example Domain')
  cy.get("title").should("contain", `${name}`)
  cy.title().should('eq', 'Example Domain')
  cy.get('title').should('contain', 'Example Domain')
  cy.get('title').should('not.be.visible')
  cy.get("h1").should("be.visible")
  cy.get("h1").should("contain", "Example Domain");
  
  cy.get('h1').invoke('text').then((text) => {
    expect(text).to.equal('Example Domain'); // Vérifie que le texte est 'Example Domain'
    cy.title().should('eq', 'Example Domain')
  });
});
Then('I see a paragraph', () => {
  cy.get('p').first().should('not.be.empty')// Vérifier que le titre de la page n'est pas vide
  cy.go('back')
});

//Étape pour visiter la page d'accueil
Given('je suis sur la page d\'accueil', () => {
  cy.visit('https://www.example.com'); // Changez l'URL si nécessaire
});
// Étape pour vérifier la présence d'un lien dans un paragraphe
Then('je devrais voir un lien dans un paragraphe', () => {
  cy.get('p').first().find('a').should('not.exist');  // Vérifier qu'il n'y a pas de lien <a> dans un paragraphe <p>
  cy.get('p').last().find('a').contains('More information...').should('exist').should('be.visible'); // Cherche un lien <a> dans un paragraphe <p>
  cy.get('a').invoke('attr', 'href').should('eq', 'https://www.iana.org/domains/example')
});


