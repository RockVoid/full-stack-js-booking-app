import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    const addRoomToHotel = async (savedRoom) => {
        try {
            await Hotel.findByIdAndUpdate(
                hotelId, 
                { $push: { rooms: savedRoom._id }}
            );
        } catch (error) {
            next(error);
        }
    }

    try {
        const savedRoom = await newRoom.save();
        await addRoomToHotel(savedRoom);
        res.status(200).json(savedRoom);
    } catch (error) {
        next(error);
    }
};

export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedRoom);
    } catch (error) {
        next(error);
    }
};

export const updateRoomAvaliability = async (req, res, next) => {
    try {
        await Room.updateOne(
            { "roomNumbers._id": req.params.id },
            {
                $push: {
                    "roomNumbers.$.unavaliableDates": req.body.dates
                },
            }
        );
        res.status(200).json("Room status has been updated.");
    } catch (error) {
        next(error);
    }
};

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;

    const removeRoomFromHotel = async () => {
        try {
            await Hotel.findByIdAndUpdate(
                hotelId,
                { $pull: { rooms: req.params.id }}
            );
        } catch (error) {
            next(error);
        }
    }

    try {
        await Room.findByIdAndDelete(req.params.id);
        await removeRoomFromHotel();
        res.status(200).json("Room has been removed.");
    } catch (error) {
        next(error);
    }
} 

export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch (error) {
        next(error);
    }
}

export const getRooms = async () => {
    try {
        const room = await Room.find();
        res.status(200).json(room);
    } catch (error) {
        next(error);
    }
}