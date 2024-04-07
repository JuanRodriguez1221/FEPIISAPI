
const mongoose = require("mongoose");
require("dotenv").config();

async function conectarMongoDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB Atlas");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
        throw error;
    }
}

module.exports = conectarMongoDB;


