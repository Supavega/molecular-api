import { Schema, mongo } from "mongoose";
import mongoose from "mongoose";

const fileSchema = new Schema ({
  name: {
    type: String, 
    required: true,
  },
  workspaceid: {
    type: String,
  }
});

export default mongoose.model("File", fileSchema);