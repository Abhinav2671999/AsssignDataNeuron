import mongoose from "mongoose";
import validator from "validator";

const reservationSchema= new mongoose.Schema({
    firstName:{
        type: String, 
        required:true,
        minLength:[3, 'First name must be at least 3 characters'],
        maxLength:[30, 'First name cannot exceed 30 characters'] ,
    },
    lastName:{
        type: String, 
        required:true,
        minLength:[3, 'First name must be at least 3 characters'],
        maxLength:[30, 'First name cannot exceed 30 characters'] ,
    },
    email:{
        type: String, 
        required:true,
        validate:[validator.isEmail, "Please provide a valid  email!"],
    },
});

export const Reservation =mongoose.model('Reservation',reservationSchema);