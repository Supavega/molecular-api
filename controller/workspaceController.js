import * as workspaceModel from "../model/workspaceModel.js";


export const createWorkspace = async (req, res) => {
  const workspaceData = { ...req.body };
  try {
    const newWorkspace = await workspaceModel.createWorkspace(workspaceData);
    res.status(200).send({
      message: "Workspace successfully created",
      data: newWorkspace
    });
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

export const getWorkspace = async (req, res) => {
  const userId = req.query.userId;
  try {
    const workspaceList = await workspaceModel.getWorkspace(userId);
    res.status(200).send({
      message: "List of user workspace",
      data: workspaceList
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteWorkspace = async(req, res) => {
  const workspaceId = req.body.workspaceId;
  try{
    const deleteWorkspace = await workspaceModel.deleteWorkspace(workspaceId);
    res.status(200).send({
      message: "Workspace successfully deleted",
      data: deleteWorkspace
    })
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};