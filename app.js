import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import * as userController from "./controller/userController.js";
import * as workspaceController from "./controller/workspaceController.js";
import jwtVerify from "./middleware/jwtVerify.js";


dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors({
//   origin: "http://localhost:3000",
//   credentials: true,
//   exposedHeaders: ['Authorization'],
// }));

app.use(cors());

//GET Routes
app.get("/workspace", jwtVerify, workspaceController.getWorkspace);

//POST Routes
app.post("/register", userController.register);
app.post("/login", userController.login);
app.post("/workspace", jwtVerify, workspaceController.createWorkspace);


//DELETE Routes
app.delete("/workspace", jwtVerify, workspaceController.deleteWorkspace);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.log("Connexion à MongoDB échouée !", err));

app.listen(8080, () => {
  console.log("Serveur démarré sur le port 8080");
})