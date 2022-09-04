import express from "express";
import { 
    getRoom, 
    getRooms, 
    deleteRoom, 
    updateRoom, 
    updateRoomAvaliability, 
    createRoom 
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);
router.get("/", getRooms);
router.get("/:id", getRoom);

router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
router.put("/availability/:id", updateRoomAvaliability);
router.put("/:id", verifyAdmin, updateRoom);

export default router;