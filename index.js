"use strict";
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

// Create an express app and set the port number.
const app = express();
const port = 3000;
const API_URL = "api.openweathermap.org";
const apiKey = process.env.API_KEY;

// Use the public folder for static files.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// When the user goes to the home page it should render the index.ejs file.
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Use Axios to retrieve the weather forecast and pass it to index.ejs to
// display whether tomorrow will be rainy or not.
app.post("/", (req, res) => {
  const location = req.body["location"];
  res.render("index.ejs");
});

// Listen on the predefined port and start the server.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
