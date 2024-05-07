import Workspace from "../schema/workspace.js";

export const createWorkspace = (data) => {
  const newWorkspace = new Workspace(data);
  newWorkspace.save();
};

export const getWorkspace = async (userId) => {
  const result = await Workspace.find({ userId : userId });
  return result;
};



export const deleteWorkspace = async (workspaceId) => {
  await Workspace.findByIdAndDelete({ workspaceId });
};

