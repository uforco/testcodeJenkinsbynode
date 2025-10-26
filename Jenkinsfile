pipeline {
    agent any

    tools{
        nodejs 'Node24'
    }

    triggers {
        // Automatically triggers pipeline when code is pushed to 'main' branch
        pollSCM('H/2 * * * *') // Checks GitHub repo every 2 minutes for new commits
    }

    stages {

        // stage("🎩 Run Groovy Script") {
        //     steps {
        //         echo "🎩 Run Groovy Script"
        //         sh 'whoami'
        //     }
        // }

        // stage("🧩 Check Node and NPM") {
        //     steps {
        //         echo "🧩 Checking Node.js and NPM versions..."
        //         sh 'node -v && npm -v'
        //     }
        // }

        // stage('🧑🏽‍💻 Checkout code') {

        //     steps {
        //         echo '⚙️ Checking out main branch...'
        //         checkout([$class: 'GitSCM',
        //             branches: [[name: '*/main']],
        //             userRemoteConfigs: [[url: 'https://github.com/uforco/testcodeJenkinsbynode.git']]
        //         ])
        //     }

        // }

        // stage("📦 Install dependencies") {
        //     steps {
        //         echo "📦 Installing dependencies..."
        //         sh 'npm install'
        //     }
        // }


        // stage("🏗️ Build") {
        //     steps {
        //         echo "🏗️ Building project..."
        //         sh 'npm run build'
        //     }
        // }

        stage('🐳 Build Docker image') {
            steps {
                script {
                    echo "🐳 Building Docker image..."
                    sh 'docker -v'
                }
                script {
                    echo "system"
                    sh 'uname -a'
                }
                // TODO: docker system and docker engine restart
                // TODO: docker root user group setup
                // TODO: docker with docker compose install latest version
                script {
                    sh '''
                    echo "host group id"
                    id -g
                    echo "all group id"
                    id -G
                    '''
                }
            }
        }
    }
}
