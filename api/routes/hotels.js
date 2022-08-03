import express from "express";
import { 
    createHotel, 
    deleteHotels, 
    getHotel, 
    getHotels, 
    updateHotel 
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotels);

//READ
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getHotels);
router.get("/countByCity", getHotels);
router.get("/countByType", getHotels);

export default router;