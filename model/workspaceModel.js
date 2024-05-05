import workspace from "../schema/workspace.js";
import Workspace from "../schema/workspace.js";

export const createWorkspace = (data) => {
  const newWorkspace = new Workspace(data);
  newWorkspace.save();
};

export const getWorkspace = (userId) => {
  const result = Workspace.find({ userId : userId });
  return result;
};

export const deleteWorkspace = (workspaceId) => {
  const result = Workspace.find({ id: workspaceId });
};

