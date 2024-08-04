# Slack Users Integration - Backend

## Brief Description

This is the backend part of the Slack Users Integration project. It is built with Express and integrates with MongoDB for storing user authentication details and Slack API for sending user details. The backend API is designed to handle the storing of user authentication details and communicate with Slack channels.

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/slack-users-integration.git
cd slack-users-integration/backend
```
### 2. Create a .env File

In the frontend directory, create a .env file and add the following environment variable:

```env
PORT=5000
MONGO_URI=your_mongo_connector_uri
SLACK_TOKEN=your_slack_api_token
JWT_SECRET=your_jwt_secret
```

Replace the environment variables with the desired values.

### 3. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 4. Compile the TypeScript files

Run the following command to compile the TypeScript.

```bash
tsc -b
```

### 5. Start the Project

Start the development server with the following command:

```bash
npm start
```

The project should now be running on http://localhost:5000.

## API Endpoints

### POST /auth/callback

- **Description**: Endpoint that recieves users' auth details and stores in the database.
- **Request**: The request is a JSON object containing users' details as below:-

    ```code
    {
        email: "john.doe@gmail.com"
        email_verified: true
        family_name: "Doe"
        given_name: "John"
        name: "John Doe"
        nickname: "john.doe"
        picture: "https://lh3.googleusercontent.com/a/XXXXXXXXXXXXXXXXX"
        sub: "google-oauth2|1111XXXXXXXXXXX"
        updated_at: "2024-08-03T08:43:28.435Z"
    }
    ```

- **Response**: The response object contains a message of successful or failed authentication as described below:-

    ```code
    {
        message: "User John Doe authenticated successfully!"
    }
    ```

### GET /slack/channels

- **Description**: Endpoint to get the list of Slack channels.
- **Request**: None
- **Response**: The response contains an array of channels which looks something like the below object:-

    ```code
    [
        {
        id: 'C02XXXXXXXX',
        name: 'general',
        is_channel: true,
        is_group: false,
        is_im: false,
        is_mpim: false,
        is_private: false,
        created: 1640349612,
        is_archived: false,
        is_general: true,
        ... } 
    ... ]
    ```

  ### POST /slack/send

- **Description**: Endpoint that uses Slack web client to post the user details to a channel.
- **Request**: The request is a JSON object containing channel ID and users' details as below:-

    ```code
    {
        channelId: C01XXXXXXXX,
        user: {
            email: "john.doe@gmail.com"
            email_verified: true
            family_name: "Doe"
            given_name: "John"
            name: "John Doe"
            nickname: "john.doe"
            picture: "https://lh3.googleusercontent.com/a/XXXXXXXXXXXXXXXXX"
            sub: "google-oauth2|1111XXXXXXXXXXX"
            updated_at: "2024-08-03T08:43:28.435Z"
        }
    }
    ```

- **Response**: The response object contains a message acknowledging the post message like below:-

    ```code
    {
        messsage: "Details sent to Slack successfully!"
    }
    ```

## Additional Details

### MongoDB Configuration

Make sure you have MongoDB configured on your local or have a database deployed on cloud.

### Slack API Configuration

Make sure you have authenticated into your Slack Developer Portal and generated respective tokens. Create a Slack app and give `channels:read`, `chat:write` and `chat:write.public` permissions to it under the **Bot Token Scopes**. You also need to install the app on your Slack workspace.

## Deployed Link

The backend is deployed and the endpoints can be accessed at [https://slack-users-integration.onrender.com/](https://slack-users-integration.onrender.com/).