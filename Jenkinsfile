pipeline {
    agent any

    tools{
        nodejs 'Node24'
    }

    stages {

        stage("🎩 Run Groovy Script") {
            steps {
                echo "🎩 Run Groovy Script"
                sh 'whoami'
            }
        }

        stage("🧩 Check Node and NPM") {
            steps {
                echo "🧩 Checking Node.js and NPM versions..."
                sh 'node -v && npm -v'
            }
        }

        stage('🧑🏽‍💻 Checkout code') {
            steps {
                echo '🧑🏽‍💻 Checking out code...'
                checkout scm
            }
            // steps {
            //     echo '⚙️ Checking out main branch...'
            //     checkout([$class: 'GitSCM',
            //         branches: [[name: '*/main']],
            //         userRemoteConfigs: [[url: 'https://github.com/uforco/testcodeJenkinsbynode.git']]
            //     ])
            // }
            // steps {
            //     echo '⚙️ Checking out main branch...'
            //     checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/uforco/testcodeJenkinsbynode.git']])
            // }
        }

        stage("📦 Install dependencies") {
            steps {
                echo "📦 Installing dependencies..."
                sh 'npm install'
            }
        }

        stage("🧪 Test code") {
            steps {
                echo "🧪 Running tests..."
                sh 'npm run test'
            }
        }

        stage("🏗️ Build") {
            steps {
                echo "🏗️ Building project..."
                sh 'npm run build'
            }
        }

        stage("🏃🏽‍➡️ Run project in test mode") {
            steps {
                echo "🏃🏽‍➡️ Starting project..."
                sh 'npm run start:prod'
            }
        }
    }
}
