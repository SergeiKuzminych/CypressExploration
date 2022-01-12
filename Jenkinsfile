pipeline {
    agent any

    parameters {
        choice(
            name: 'video',
            choices: ['Enabled', 'Disabled'],
            description: 'Keep Recording Video to the Cypress Dashboard: '
        )
    }

    stages {
        stage('define parameters') {
            steps {
                script {
                    video_config = ("$params.video" == "Enabled") ? "--config video=true" :
                                   ("$params.video" == "Disabled") ? "--config video=false" : ""
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
                        bat 'npx cypress run --record --key 55760646-0a87-4c46-8350-749c53f5912b --parallel'
                    }
                }
                stage('Run tests in parallel B') {
                    steps {
                        bat 'npx cypress run --record --key 55760646-0a87-4c46-8350-749c53f5912b --parallel'
                    }
                }
                stage('Run tests in parallel C') {
                    steps {
                        bat 'npx cypress run --record --key 55760646-0a87-4c46-8350-749c53f5912b --parallel'
                    }
                }
            }
        }
    }
}
