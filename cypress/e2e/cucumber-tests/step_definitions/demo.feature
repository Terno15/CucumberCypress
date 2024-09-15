Feature: Demo Feature

    Just to create a quick BDD Demo
    this is second line of the description

Scenario: Ouvrir la page example.com
    Given I open example page
    Then I see page the title 'Example Domain'
    Then I see a paragraph
    

Scenario: Vérifier la présence d'un link dans le paragraphe
    Given je suis sur la page d'accueil
    Then je devrais voir un lien dans un paragraphe
       
        