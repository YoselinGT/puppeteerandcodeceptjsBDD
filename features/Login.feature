Feature: Logging in

  Scenario: Iniciar sesion en la pagina
    Given Im on the right page
    When I fill the form with my user and my password
    Then I should see the dashboard page
