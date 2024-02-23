import ErrorHandler from "../error/error.js";
import {Reservation} from "../models/reservationSchema.js";

let addUpdateCount = 0;

export const sendReservation = async (req, res, next) => {
    try {
        // Handle request body to get data
        const newData = req.body;

        // Validate required fields in the request body
        if (!newData || !newData.firstName || !newData.lastName || !newData.email) {
            return next(new ErrorHandler("All fields are required", 400));
        }

        // Add data to the database
        const createdReservation = await Reservation.create(newData);

        // Increment the addUpdateCount and respond with success message including ID
        addUpdateCount++;
        return res.status(200).json({ success: true, createdReservation, addUpdateCount });
    } catch (error) {
        // Pass the error to the next middleware
        next(error);
    }
};


export const updateReservation = async (req, res, next) => {
    try {
        // Handle request body to get data
        const { id,firstName, lastName, email } = req.body;

        // Validate required fields in the request body
        if (!id ||!firstName || !lastName || !email ) {
            return next (new ErrorHandler("All fields are required", 400));
        }

        // Check if the data with the given ID exists
        const existingData = await Reservation.findById(id);
        if (!existingData) {
            // throw createCustomError('Data not found', 404);
            return next (new ErrorHandler("Data not found", 404));
        }

        // Prepare the updated data
        const updatedData = {
            firstName,
            lastName,
            email,
            
        };

        // Update data in the database
        await Reservation.findByIdAndUpdate(id, updatedData);

        // Increment the addUpdateCount and respond with success message
        addUpdateCount++;
        return res.status(200).json({ success: true,id, updatedData, addUpdateCount });
    } catch (error) {
        next(error);
    }
};

export const getData = async (req, res, next) => {
    try {
        // Fetch data from the database
        const data = await Reservation.find();

        // Respond with the fetched data and the addUpdateCount
        return res.status(200).json({ success: true, data, addUpdateCount });
    } catch (error) {
        // Pass the error to the next middleware
        next(error);
    }
};

