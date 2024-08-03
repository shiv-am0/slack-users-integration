import { Schema, model } from 'mongoose';

// Interface to define the structure of the user object.
interface IUser {
  sub: string;
  name: string;
  email: string;
  picture: string;
}

// Mongoose schema for users.
const userSchema = new Schema<IUser>({
  sub: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  picture: { type: String, required: true },
});

export default model<IUser>('User', userSchema);
