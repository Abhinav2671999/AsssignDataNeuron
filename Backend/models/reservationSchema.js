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
    // phone:{
    //     type: String, 
    //     required:true,
    //     minLength:[10, 'Phone  number should have atleast 10 digits'],
    //     maxLength:[10, 'Phone  number should have atleast 10 digits'] ,
    // },
    // description:{
    //     type: String,
    //     required:[true,'Description is required'],
    //     minLenght:[3, 'Description must be at least 3 characters long...!!!'],
    //     maxLength:[350, 'Description can not be more than 350 characters...!!!'],
    // },
});

export const Reservation =mongoose.model('Reservation',reservationSchema);