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

        // stage('🧑🏽‍💻 Checkout code') {
        //     steps {
        //         echo '🧑🏽‍💻 Checking out code...'
        //         checkout scm
        //     }
        // }

        // stage("📦 Install dependencies") {
        //     steps {
        //         echo "📦 Installing dependencies..."
        //         sh 'npm install'
        //     }
        // }

        // stage("🧪 Test code") {
        //     steps {
        //         echo "🧪 Running tests..."
        //         sh 'npm run test'
        //     }
        // }

        // stage("🏗️ Build") {
        //     steps {
        //         echo "🏗️ Building project..."
        //         sh 'npm run build'
        //     }
        // }

        // stage("🏃🏽‍➡️ Run project in test mode") {
        //     steps {
        //         echo "🏃🏽‍➡️ Starting project..."
        //         sh 'npm run start:prod'
        //     }
        // }
    }
}
