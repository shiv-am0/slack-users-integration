import { Request, Response, NextFunction } from "express";
import { getClient } from "../config/slack";

export const getChannels = async (req: Request, res: Response) => {
  const client = getClient();

  try {
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

export const sendToChannel = async (req: Request, res: Response) => {
  const client = getClient();
  const { channelId, user } = req.body;

  console.log(`User at backend: ${user}`);

  const message = `${user.name} just onboarded!\nEmail: ${user.email}\nPicture: ${user.picture}`;

  try {
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
