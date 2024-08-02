import { Request, Response, NextFunction } from "express";
import { getClient } from "../config/slack";

export const getChannels = async (req: Request, res: Response) => {
    const client = getClient();

    try {
        const result = await client.conversations.list();

        if (result.ok) {
            res.json(result.channels);
        } else {
            res.status(500).json({ error: 'Failed to fetch channels' });
        }
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const sendToChannel = () => {}