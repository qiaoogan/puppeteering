pipeline {
    agent any

    stages {
        stage('UI Tests') {
            steps {
                echo 'Run UI Automation tests with Puppeteer'
                sh "pwd && ls -al"
                sh "bash containerun.sh"
            }
        }
        stage('Trigger Visual Tests') {
            steps {
                echo 'Trigger Visual Tests with Micoo'
                sh "pwd && ls -al"
                sh "bash containerun-vtest.sh"
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true, fingerprint: true
        }
    }
}
