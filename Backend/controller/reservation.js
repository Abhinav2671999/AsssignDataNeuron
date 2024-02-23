import ErrorHandler from "../error/error.js";
import {Reservation} from "../models/reservationSchema.js";

let addUpdateCount = 0;

export const sendReservation = async (req, res, next) => {
    try {
        const myData = req.body;
       

        // Add data to the database
        const createdReservation = await Reservation.create(myData);
        addUpdateCount++;
        return res.status(200).json({ success: true, createdReservation, addUpdateCount });
    } catch (error) {
        next(error);
    }
};


export const updateReservation = async (req, res, next) => {
    try {
        const { id,firstName, lastName, email } = req.body;
        if (!id ||!firstName || !lastName || !email ) {
            return next (new ErrorHandler("All fields are required", 400));
        }

        // Check if the data with the given ID exists
        const existingData = await Reservation.findById(id);
        if (!existingData) {
            return next (new ErrorHandler("Data not found", 404));
        }
        const updatedData = {
            firstName,
            lastName,
            email,
            
        };

        // Update data in the database
        await Reservation.findByIdAndUpdate(id, updatedData);
        addUpdateCount++;
        return res.status(200).json({ success: true,id, updatedData, addUpdateCount });
    } catch (error) {
        next(error);
    }
};

export const getData = async (req, res, next) => {
    try {
        const data = await Reservation.find();
        return res.status(200).json({ success: true, data, addUpdateCount });
    } catch (error) {
        // Pass the error to the next middleware
        next(error);
    }
};

