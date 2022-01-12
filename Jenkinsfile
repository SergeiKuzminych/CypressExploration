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
        password(name: 'CYPRESS_DASHBOARD_KEY', defaultValue: '', description: 'Enter a Cypress Dashboard Record Key (KEEP CLEEN TO DROP RECORDING)')
    }

    stages {
        stage('define parameters') {
            steps {
                script {
                    spec_to_run = ("$params.SPEC" == "All") ? "" : "--spec=cypress/all-tests/$params.SPEC"
                    recording = ("$params.CYPRESS_DASHBOARD_KEY" == "") ? "" : "--record --key $params.CYPRESS_DASHBOARD_KEY"
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
                        bat "npx cypress run ${recording} --parallel ${spec_to_run} --config video=${params.VIDEO}"
                    }
                }
                stage('Run tests in parallel B') {
                    steps {
                        bat "npx cypress run ${recording} --parallel ${spec_to_run} --config video=${params.VIDEO}"
                    }
                }
                stage('Run tests in parallel C') {
                    steps {
                        bat "npx cypress run ${recording} --parallel ${spec_to_run} --config video=${params.VIDEO}"
                    }
                }
            }
        }
    }
}
