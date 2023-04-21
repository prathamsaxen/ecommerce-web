import mongoose from "mongoose";

function  initDB() {
    mongoose.connect( process.env.MONGO_URI,{});
    mongoose.connection.on('connected', () => {
        console.log('connected to mongodb')
    })
    mongoose.connection.on('error',() => {
        console.log('error when u are trying to connect with mongoodb')
    })
}

export default initDB;
