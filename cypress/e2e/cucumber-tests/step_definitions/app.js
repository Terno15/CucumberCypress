import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

// Étape pour visiter la page d'accueil
Given('je suis sur la page d\'accueil', () => {
  cy.visit('https://www.example.com'); // Changez l'URL si nécessaire
});

// Étape pour vérifier la présence d'un lien dans un paragraphe
Then('je devrais voir un lien dans un paragraphe', () => {
  cy.get('p').find('a').should('be.visible'); // Cherche un lien <a> dans un paragraphe <p>
});

