import { Request, Response, NextFunction } from "express";
import User from '../models/User';

export const callback = async (req: Request, res: Response, next: NextFunction) => {
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
    
        res.json({message: `User ${user.name} created successfully!`})
    } catch (err) {
        // Handle any errors that occur
        res.json({message: "Unable to create user!"})
        next(err);
    }
}
