// require('dotenv').config({path: '/.env'})
// Importing the dotenv library for environment variable configuration
import dotenv from "dotenv"

// Importing the connectDB function to establish a connection with MongoDB
import connectDB from "./db/index.js";

// Importing the Express app instance
import {app} from "./app.js";


dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !!! ", err)
})


// import dotenv from "dotenv";
// import connectDB from "./db/index.js";
// import express from "express";

// dotenv.config({
//   path: './.env' // Adjust the path as per your project structure
// });

// const app = express();

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//       console.log(`Server is running at port : ${process.env.PORT || 8000}`);
//     });
//   })
//   .catch((err) => {
//     console.log("MONGODB connection failed !!! ", err);
//   });
