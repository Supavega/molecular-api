import User from "../schema/file.js";
import File from "../schema/file.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

export const createFile = (fileData) => {
  const newFile = new User(fileData);
  newFile.save();
};

export const deleteFile = async (fileId) => {
  await File.findByIdAndDelete({ fileId });
}

export const updateFile = async (fileId, data) => {
	await File.findByIdAndUpdate(fileId, data);
}

export const getFiles = async (workspaceId) => {
  return await File.find({workspaceid: workspaceId});
}