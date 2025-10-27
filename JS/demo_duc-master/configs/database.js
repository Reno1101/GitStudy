const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/demo_duc');

    console.log('connect database successful');
  } catch (error) {
    console.log('connect database fail::' + error.message);
  }
}

module.exports = connectDB;
