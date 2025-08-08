import dotenv from "dotenv";

dotenv.config();

const Config = {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL,
}

export default Config;