Feature: Demo Feature

    Just to create a quick BDD Demo
    this is second line of the description

Scenario: Ouvrir la page example.com
    Given I open example page
    Then I should see the page title
    Then I see a paragraph
    

Scenario: Vérifier la présence d'un link dans le paragraphe
    Given je suis sur la page d'accueil
    Then je devrais voir un lien dans un paragraphe
       
        