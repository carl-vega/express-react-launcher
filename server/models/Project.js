import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const projectSchema = new Schema(
  {
    title: String,
    description: [
      {
        type: String,
      }
    ],
    repository: String,
    live: String,
    image: String,
    pinned: Boolean
  }
);


const Project = model('Project', projectSchema);

export default Project;
