import express from "express";
import { 
    createHotel, 
    deleteHotels, 
    getHotel, 
    getHotels, 
    updateHotel 
} from "../controllers/hotel.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotels);

//READ
router.get("/:id", getHotel);

//GET ALL
router.get("/", getHotels);

export default router;