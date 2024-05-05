import { Schema } from "mongoose";
import mongoose from "mongoose";

const workspaceSchema = new Schema({
  name: {
    type: String, 
    required: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  files: [{
    name: String,
    content: String,
  }]
});

export default mongoose.model("Workspace", workspaceSchema);