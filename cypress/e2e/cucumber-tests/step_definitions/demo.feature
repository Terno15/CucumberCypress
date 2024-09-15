Feature: Demo Feature

    Just to create a quick BDD Demo
    this is second line of the description

# Scenario: Should load example website
#         Given I open example page
#         Then I see page title
#         Then I see a paragraph
#         Then I see another paragraph 'More information...'

Scenario: Je vérifie la présence d'un lien dans un paragraphe
    Given je suis sur la page d'accueil
    Then je devrais voir un lien dans un paragraphe
       
        