<!-- Technical Test Application -->

    This project is a web application built with a React/Svelte frontend (in TypeScript) and a Node.js backend (in TypeScript/JavaScript). 
    It provides the following functionalities:

    Upload a CSV file, with progress feedback during upload.
    List the uploaded data with pagination.
    Search through the uploaded data.
    Responsive performance during listing and searching.

<!-- Prerequisites -->

Make sure you have the following installed:

    Node.js (version 16.x or above)
    npm

<!-- Project Structure -->

The project consists of three main directories:

    technical_test/client: Frontend (React) project
    technical_test/server: Backend (Node.js) project
    technical_test: Root directory for shared configurations

<!-- Installation -->

    Step 1: Install Dependencies
        Run the following commands to install the required dependencies for the client, server, and root directories.

        cd client
        npm install

        cd server
        npm install

        cd ..
        npm install

    Step 2: Start the Application
        Once the dependencies are installed, you can start the application with the following command:

        npm run dev
