import { Request, Response, NextFunction } from "express";
import { getClient } from "../config/slack";
import { z } from "zod";

// Zod type for message
const messageType = z.object({
  channelId: z.string(),
  user: z.object({
    sub: z.string(),
    name: z.string(),
    email: z.string(),
    picture: z.string() 
  })
})

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
  // const { channelId, user } = req.body;
  const parsedMessage = messageType.safeParse(req.body);

  // Send an error message if input received is not according to the required type.
  if (!parsedMessage.success) {
    return res.status(411).json({
        message: "Incorrect inputs"
    })
  }

  const channelId = parsedMessage.data?.channelId;
  const sub = parsedMessage.data?.user.sub;
  const name = parsedMessage.data?.user.name;
  const email = parsedMessage.data?.user.email;
  const picture = parsedMessage.data?.user.picture;

  // Message format to be sent.
  const message = `${name} just onboarded!\nEmail: ${email}\nPicture: ${picture}`;

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
