import User from "../schema/user.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

const createUser = (userData) => {
    const newUser = new User(userData);
    newUser.save();
};

const loginUser = async (userData) => {
    try {
        const mail = userData.mail;
        const password = userData.password;
        const user = await User.findOne({ mail });

        if (!user) {
        throw new Error("User not found");
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
        throw new Error("Password not matching");
        }

        const token = generateAuthToken(user);

        return { user, token };
    } catch (error) {
        console.error(error);
        return { error: "Login failed" };
    }
};

const updateUser = async (userData) => {
    try {
        const USERNAME = userData.username;
        const NEWPASSWORD = userData.newPassword;
        const NEWPASSWORDCONFIRM = userData.newPasswordConfirm;
        const MAIL = userData.mail;
        const PASSWORD = userData.password;

        const USERID = userData.userId;

        const filter = {
            _id: USERID
        };

        const user = await User.findOne(filter);
        
        if (!user) {
            throw new Error("User not found");
        }

        if (!PASSWORD) {
            throw new Error("No password provided");
        }

        if (NEWPASSWORD && NEWPASSWORD !== NEWPASSWORDCONFIRM) {
            throw new Error("New passwords do not match");
        }

        const passwordMatch = await bcrypt.compare(PASSWORD, user.password);
        if (!passwordMatch) {
            throw new Error("Password not matching");
        }

        const SALT = await bcrypt.genSalt();
        const ENCRYPTEDNEWPASSWORD = await bcrypt.hash(NEWPASSWORD, SALT);

        const newUser = {
            username: USERNAME ? USERNAME : user.username,
            mail: MAIL ? MAIL : user.mail,
            password: NEWPASSWORD ? ENCRYPTEDNEWPASSWORD : user.password,
            createdAt: user.createdAt,
            updatedAt: Date.now()
        }
        
        await User.findOneAndUpdate(filter, newUser);

        return user;
    } catch (error) {
        console.error(error);
        return { error: "Update failed" };
    }
};

const generateAuthToken = (user) => {
    const token = jwt.sign({ _id: user._id.toString()}, process.env.SECRET_KEY);
    return token;
}

export {
    createUser,
    loginUser,
    updateUser,
    generateAuthToken
}
