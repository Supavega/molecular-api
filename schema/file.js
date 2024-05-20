import { Schema, mongo } from "mongoose";
import mongoose from "mongoose";

const fileSchema = new Schema ({
  name: {
    type: String, 
    required: true,
  },
  content: {
    type: String,
    default: "",
  },
  creationDate: {
    type: Date,
  },
  lastModificationDate: {
    type: Date,
  },
  workspaceid: {
    type: String,
  },
  userId: {
    type: String,
  }
});

export default mongoose.model("File", fileSchema);