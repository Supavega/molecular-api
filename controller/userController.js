import * as userModel from "../model/userModel.js";

const register = async (req, res) => {
    const registerData = { ...req.body };
    try {
        const newUser = await userModel.createUser(registerData);
        res.status(200).send({
            message: "User successfully added",
            data: newUser
        })
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

const login = async (req, res) => {
    try {
        const result = await userModel.loginUser(req.body);
        res.setHeader("Authorization", `Bearer ${result.token}`);
        res.json({ message: "Logged in successfully", user: result.user});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

const update = async (req, res) => {
    try {
        const result = await userModel.updateUser(req.body);
        res.setHeader("Authorization", `Bearer ${result.token}`);
        res.json({ message: "Updated in successfully", user: result.user});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

const checkToken = (req, res) => {
    res.json({ valid: true });
}

export {
    register, 
    login,
    update,
    checkToken
}