"use strict";
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

// Create an express app and set the port number.
const app = express();
const port = 3000;

// Determine API_URLs and API_KEYs.
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/forecast";
const GEOCODING_API_URL = "https://www.mapquestapi.com/geocoding/v1/address";
const apiKeyWeather = process.env.WEATHER_API_KEY;
const apiKeyGeocoding = process.env.GEOCODING_API_KEY;

// Use the public folder for static files.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Use Axios to retrieve the geographical coordinates of the location.
const getCoordinates = async function (location) {
  try {
    const response = await axios.get(GEOCODING_API_URL, {
      params: { key: apiKeyGeocoding, location: location },
    });
    const latitude = response.data.results[0].locations[0].latLng.lat;
    const longitude = response.data.results[0].locations[0].latLng.lng;
    const arrCoordinates = [latitude, longitude];
    return arrCoordinates;
  } catch (error) {
    console.error("Failed to make request:", error.message);
    return;
  }
};

// When the user goes to the home page it should render the index.ejs file.
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Add a feature to the homepage (index.ejs) that
// shows whether tomorrow's weather forecast includes rain.
app.post("/", async (req, res) => {
  const location = req.body["location"];

  // Retrieve the geographical coordinates of the location.
  const coordinates = await getCoordinates(location);

  // Use Axios to retrieve the weather forecast and pass it to index.ejs to
  // display whether tomorrow will be rainy or not.
  try {
    const response = await axios.get(WEATHER_API_URL, {
      params: {
        lat: coordinates[0],
        lon: coordinates[1],
        appid: apiKeyWeather,
      },
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
