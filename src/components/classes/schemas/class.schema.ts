import * as mongoose from 'mongoose';

export const ClassSchema = new mongoose.Schema({
  id: String,
  name: String,
  participants: Array(String),
  occurrence: String,
  room: String,
  teacher: String
});