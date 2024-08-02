import { WebClient, LogLevel } from "@slack/web-api"

export const getClient = () => {
    // Read a token from the environment variables
    const token = process.env.SLACK_TOKEN;

    // Initialize slack API client
    const client = new WebClient(token, {
        logLevel: LogLevel.DEBUG
    });

    return client;
}