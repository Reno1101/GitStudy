const mongoose = require("mongoose")

array = function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase');

        console.log('connect database successfully');
    } catch (error) {
        console.log('Error connecting to the database:', error);
    }
}

module.exports = connectDB;