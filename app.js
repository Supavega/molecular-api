import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import * as userController from "./controller/userController.js";
import * as workspaceController from "./controller/workspaceController.js";
import * as fileController from "./controller/fileController.js";
import jwtVerify from "./middleware/jwtVerify.js";



dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000',
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Authorization']
}));

//GET Routes
app.get("/workspace", jwtVerify, workspaceController.getWorkspace);
app.get("/workspace/:id", jwtVerify, workspaceController.getWorkspaceById);
app.get("/file" , jwtVerify, fileController.getFiles);
app.get("/file/:id", jwtVerify, fileController.getFileById);
app.get("/fileAll/:id", jwtVerify, fileController.getAllFiles);

//POST Routes
app.post("/register", userController.register);
app.post("/login", userController.login);
app.post("/update", jwtVerify, userController.update);
app.post("/workspace", jwtVerify, workspaceController.createWorkspace);
app.post("/file/create", jwtVerify , fileController.createFile);


//DELETE Routes
app.delete("/workspace", jwtVerify, workspaceController.deleteWorkspace);
app.delete("/file/:id", jwtVerify, fileController.deleteFile);

//PUT Routes
app.put("/workspace", jwtVerify, workspaceController.updateWorkspace);
app.put("/file", jwtVerify, fileController.updateFile);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.log("Connexion à MongoDB échouée !", err));

app.listen(process.env.PORT || 8080, () => {
  console.log("Serveur démarré sur le port 8080");
})