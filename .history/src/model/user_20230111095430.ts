import { Schema, model } from 'mongoose';
export interface IUser {
    username ?: string;
    password ?: string;
}

const UserSchema = new Schema<IUser> ({
    username: String,
    password: String,
})

const User = model<IUser> ('User', UserSchema);
export {User};