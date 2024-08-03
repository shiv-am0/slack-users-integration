import { Request, Response, NextFunction } from "express";
import { getClient } from "../config/slack";

// Function to get channels from Slack.
export const getChannels = async (req: Request, res: Response) => {
  // Initialize the Slack web client.
  const client = getClient();

  try {
    // Use the client to fetch Slack channels list.
    const result = await client.conversations.list();

    if (result.ok) {
      res.json(result.channels);
    } else {
      res.status(500).json({ error: "Failed to fetch channels" });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Function to send message to Slack channel.
export const sendToChannel = async (req: Request, res: Response) => {
  // Initialize the Slack web client.
  const client = getClient();

  // Get data from request object.
  const { channelId, user } = req.body;

  // Message format to be sent.
  const message = `${user.name} just onboarded!\nEmail: ${user.email}\nPicture: ${user.picture}`;

  try {
    // Use the client to post message in channel.
    await client.chat.postMessage({
      channel: channelId,
      text: message,
    });
    return res.json({ message: "Details sent to Slack successfully!" });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
