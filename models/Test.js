import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const TestSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: [true, "Name already exists"]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default model('test', TestSchema);