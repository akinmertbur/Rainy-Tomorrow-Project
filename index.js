"use strict";
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

// Create an express app and set the port number.
const app = express();
const port = 3000;
const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
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
app.post("/", async (req, res) => {
  //const location = req.body["location"];

  const data = {
    lat: 22.21232,
    lon: -55.107964,
    // lat: 45.21232,
    // lon: 22.107964,
  };

  try {
    const response = await axios.get(API_URL, {
      params: { lat: data.lat, lon: data.lon, appid: apiKey },
    });
    res.render("index.ejs", {
      morning_data: response.data.list[7].weather[0].main,
      afternoon_data: response.data.list[9].weather[0].main,
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

// Listen on the predefined port and start the server.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
