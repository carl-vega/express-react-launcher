import { Schema, model } from 'mongoose';



const projectSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: [{
      type: String,
    }],
    repository: String,
    live: String,
    image: String
  }
);




const Project = model('Project', projectSchema);

export default Project;