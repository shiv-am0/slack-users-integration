# Slack Users Integration - Frontend

## Brief Description

This is the frontend part of the Slack Users Integration project. It is built with React and uses Auth0 for authentication. Users can log in with Google, and upon successful authentication, their details are sent to a Slack channel.

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/slack-users-integration.git
cd slack-users-integration/frontend
```
### 2. Create a .env File

In the frontend directory, create a .env file and add the following environment variable:

```env
REACT_APP_API_URL=your_backend_api_url
REACT_APP_AUTH0_DOMAIN=your_auth0_domain
REACT_APP_AUTH0_CLIENT_ID=your_auth0_client_id
REACT_APP_AUTH0_CLIENT_SECRET=your_auth0_client_secret
```

Replace your_auth0_domain, your_auth0_client_id, and your_backend_api_url with your actual Auth0 domain, client ID, and backend API URL.

### 3. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 4. Start the Project

Start the development server with the following command:

```bash
npm start
```

The project should now be running on http://localhost:3000.

## Additional Details

### Auth0 Configuration

Make sure you have configured your Auth0 application with the appropriate callback URLs, allowed web origins, and logout URLs.
