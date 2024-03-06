Feature: Logging in

  Scenario: Iniciar sesion en la pagina
    Given Im on the right page
    When I fill the form with my user: "ygalvan" and my password: "qwerty123"
    Then I should see the dashboard page

  @probando
  Scenario Outline: Scenario Outline for Login
    Given Im on the right page
    When I fill the form with my <User> and my <Password>
    Then I should see the dashboard page
    Examples:
      | User | Password |
      | ygalvan | qwerty123 |