import * as filemodel from "../model/fileModel.js";
import file from "../schema/file.js";

export const createFile = async (req, res) => {
  const fileData = { ...req.body };
  try {
    const newFile = await filemodel.createFile(fileData);
    res.status(200).send({
      message: "File successfully added",
      data: newFile
    });
  } catch (err) {
    res.status(400).json({message: err.message});
  }
}

export const getFiles = async (req, res) => {
  try {
    const workspaceId = req.query.workspaceid;
    const files = await filemodel.getFiles(workspaceId);
    res.status(200).send({
      message: "Files successfully retrieved",
      data: files
    })
  } catch (err) {
    res.status(400).json({message: err.message});
  }
}

export const deleteFile = async (req, res) => {
  const fileId = req.params.id;
  try {
    const deleteFile = await filemodel.deleteFile(fileId);
    res.status(200).send({
      message: "File successfully deleted",
      data: deleteFile
    })
  } catch (err) {
    res.status(400).json({message: err.message});
  }
}

export const updateFile = async (req, res) => {
  const fileId = req.body.fileId;
  const fileData = { ...req.body };
  try {
    const updateFile = await filemodel.updateFile(fileId, fileData);
    res.status(200).send({
      message: "File successfully updated",
      data: updateFile
    })
  } catch (err) {
    res.status(400).json({message: err.message});
  }
}

export const getFileById = async (req, res) => {
  const FileId = req.params.id;
  try {
    const file = await filemodel.getFileById(FileId);
    res.status(200).send({
      message: "File successfully retrieved",
      data: file
    })
  } catch (err) {
    res.status(400).json({message: err.message});
  }
}

export const getAllFiles = async (req, res) => {
  try {
    const files = await filemodel.getAllFiles();
    res.status(200).send({
      message: "Files successfully retrieved",
      data: files
    })
  } catch (err) {
    res.status(400).json({message: err.message});
  }
}