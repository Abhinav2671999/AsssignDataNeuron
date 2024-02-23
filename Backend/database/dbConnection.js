import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"TECHCOMPILER"
    }).then(() => {
        console.log("Database Connected Successfully");
    }).catch((err) => {
        console.error(`error accured while connecting to the database ${err}`);
    });
}