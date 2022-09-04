import express from "express";
import {
    getUser,
    getUsers,
    updateUser,
    deleteUser
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const route = express.Router();

route.get("/", verifyUser, getUser);
route.get("/:id", verifyAdmin, getUsers);
route.put("/:id", verifyUser, updateUser);
route.delete("/:id", verifyUser, deleteUser);

export default route;