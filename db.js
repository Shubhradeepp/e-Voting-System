const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL
const mongoURL = process.env.MONGODB_URL_LOCAL // Replace 'mydatabase' with your database name
// const mongoURL = process.env.MONGODB_URL;

// Set up MongoDB connection
const db = async ()=>{
    try {
      const connectionInstance= await mongoose.connect(mongoURL)
      console.log(`\nMongodB Connection: ${connectionInstance.connection.host}`);
  
    } catch (error) {
      console.error("Connection Error to MongodB", error)
      throw error
    }
  }

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
// Define event listeners for database connection


module.exports = db;