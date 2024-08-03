import { Request, Response } from "express";
import User from '../models/User';

// Function to save the user details to database after authentication.
export const callback = async (req: Request, res: Response) => {
    const { sub, name, email, picture } = req.body.user;

    try {
        const user = await User.findOneAndUpdate(
            { sub: sub },
            {
              sub: sub,
              name: name,
              email: email,
              picture: picture,
            },
            { upsert: true, new: true } // Upsert: create a new user if not found, return the updated user if found
        );
    
        res.json({message: `User ${user.name} authenticated successfully!`})
    } catch (err) {
        // Handle any errors that occur
        res.json({message: "Unable to create user!"})
    }
}
