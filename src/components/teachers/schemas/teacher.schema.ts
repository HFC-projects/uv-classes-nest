import * as mongoose from 'mongoose';

export const TeacherSchema = new mongoose.Schema({
  id: String,
  name: String
});