import mongoose from "mongoose";
import Config from "./config.js";

const connectDatabase = async () =>{
    try {
        mongoose.connect(Config.MONGODB_URL, {
            dbName: Config.DB_NAME,
        });
        console.log(`Connected to the database: ${Config.DB_NAME}`);
    } catch (error) {
        console.log(`Error connecting to the database: ${error.message}`);
        process.exit(1);
    }
}

export default connectDatabase;
