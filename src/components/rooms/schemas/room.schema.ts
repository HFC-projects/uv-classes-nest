import * as mongoose from 'mongoose';

export const RoomSchema = new mongoose.Schema({
  id: String,
  name: String
});