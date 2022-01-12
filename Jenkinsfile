pipeline {
    agent any

    parameters {
        booleanParam(name: 'VIDEO', defaultValue: true, description: 'Keep Recording Video to the Cypress Dashboard')
        choice(
            name: 'SPEC',
            choices: [
                'All', 'API-tests/api-test.js', 'API-tests/google-store.js', 
                'collections-tests/array.js', 'collections-tests/map.js', 'collections-tests/set.js',
                'conditional-tests/conditional.js',
                'UI-tests/google-store.js', 'UI-tests/ui-test.js'
            ],
            description: 'Spec to run'
        )
    }

    stages {
        stage('define parameters') {
            steps {
                script {
                    spec_to_run = ("$params.SPEC" == "All") ? "" : "--spec=cypress/all-tests/$params.SPEC"
                }
            }
        }
        stage('build') {
            steps {
                bat 'npm install'
            }
        }
        stage('parallel') {
            parallel {
                // start several test jobs in parallel, and they all
                // will use Cypress Dashboard to load balance any found spec files
                stage('Run tests in parallel A') {
                    steps {
                        bat "npx cypress run --record --key 55760646-0a87-4c46-8350-749c53f5912b --parallel ${spec_to_run} --config video=${params.VIDEO}"
                    }
                }
                stage('Run tests in parallel B') {
                    steps {
                        bat "npx cypress run --record --key 55760646-0a87-4c46-8350-749c53f5912b --parallel ${spec_to_run} --config video=${params.VIDEO}"
                    }
                }
                stage('Run tests in parallel C') {
                    steps {
                        bat "npx cypress run --record --key 55760646-0a87-4c46-8350-749c53f5912b --parallel ${spec_to_run} --config video=${params.VIDEO}"
                    }
                }
            }
        }
    }
}
