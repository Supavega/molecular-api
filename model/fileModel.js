import User from "../schema/file.js";
import File from "../schema/file.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

const createFile = (fileData) => {
    const newFile = new User(fileData);
    newFile.save();
};

const getFiles = async (workspaceId) => {
    return await File.find({workspaceid: workspaceId});
}

export { 
    createFile,
    getFiles
}