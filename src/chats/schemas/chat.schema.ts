import * as mongoose from 'mongoose';
export const ChatSchema = new mongoose.Schema({
  user: String,
  message: String,
});
