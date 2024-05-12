import * as filemodel from "../model/fileModel.js";

const createFile = async (req, res) => {
    const fileData = { ...req.body };
    try {
        const newFile = await filemodel.createFile(fileData);
        res.status(200).send({
            message: "File successfully added",
            data: newFile
        })
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

const getFiles = async (req, res) => {
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


export { 
    createFile,
    getFiles
}