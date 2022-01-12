# CypressExploration
This is an example of project based on Cypress Framework. Cypress Exploration repository is actually more a get-to-know playground. Here i get familiar with this testing framework and it's cool features. Based on company provided courses.

## Resources

Tests are based on webservices:
* https://reqres.in/ - Create user endpoint.
* https://www.xe.com/currencyconverter/ - Currency Converter for UI tests.
* https://store.google.com/us/ - Google Store as an example of ecommerce webapp.

Also awesome Random Data Generator package [Chance](https://chancejs.com/) is definitely worth to mention.

## Usage

1) Install [NodeJS](https://nodejs.org/en/download/).
2) Download the repository.

    You can do this using the command line: 
    ```bash
    git clone https://github.com/SergeiKuzminych/CypressExploration.git
    ```

3) Install dependencies.
    You can do this using the command line: 
    ```bash
    npm install
    ```
    It will install all necessary components based on package.json file.

4) Run tests.
    * To run all tests you can use such command:

        ```bash
        npx cypress run
        ```
        This will run all available tests in Electron in **HEADLESS** mode. *More about Electron browser [here](https://www.npmjs.com/package/electron).* 

    * Also you can specify browser you want to run tests in by passing ``` --browser``` or ```-b``` argument. For example for chrome:

        ```bash
        npx cypress run -b chrome
        ```
        *More about browsers in Cypress [here](https://docs.cypress.io/guides/guides/launching-browsers#Chrome-Browsers).* 

    * If you want to record your test run results to the Cypress Dashboard you can use flag ```--record``` . This requires also passing ```--key``` or ```-k``` argument with the Cypress Dashboard key right next to it:

        ```bash
        npx cypress run --record --key 55760646-0a87-4c46-8350-749c53f5912b
        ```
        *More about Cypress Dashboard [here](https://docs.cypress.io/guides/dashboard/introduction).* 

    * There are two ways to launch specific test spec:
        1) Use the Test Runner provided by Cypress to run testing files separately and see the results of the execution:

            ```bash
            npx cypress open
            ```
            *More about Cypress Test Runner [here](https://docs.cypress.io/guides/core-concepts/test-runner).* 
        
        2) Use ```--spec``` or ```-s``` argument with relative path to the testing file:

            ```bash
            npx cypress run --spec=%PATH_TO_THE_SPEC_FILE%/%SPEC_FILE_NAME%.js
            ```
            *More about this spec argument [here](https://docs.cypress.io/guides/guides/command-line#cypress-run-spec-lt-spec-gt).* 

## Reporting

Beside default console-based reporter there are two more ways to examine your test results:

1) As mentioned before, if you used ```--record``` flag, you can see the results in the [Cypress Dashboard](https://dashboard.cypress.io/).
2) This project has integration with [TestRail](https://www.gurock.com/testrail/docs/user-guide/getting-started/walkthrough/). This is a test management tool that is used to store information on how testing is to be done, plan testing activities and report the status of quality assurance activities (in our case to examine test results).

## CI

This project has integration with such continuous integration systems as [CircleCI](https://circleci.com/) and [Jenkins](https://www.jenkins.io/). 

Jenkins pipeline is being created from script [Jenkinsfile](Jenkinsfile). 

CircleCI is configured to run tests in every opened pull request.


## Contributing

Pull requests are welcome. 

## License
[MIT](https://choosealicense.com/licenses/mit/)