# Weather Forecast App

This project is a simple web application that allows users to check tomorrow's weather forecast, specifically whether it includes rain or not. It utilizes the OpenWeatherMap API for weather data and the MapQuest Geocoding API for obtaining geographical coordinates based on location input.

## Prerequisites

Before running this project, make sure you have the following:

- Node.js installed on your system
- API keys for OpenWeatherMap and MapQuest Geocoding APIs

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your_username/weather-forecast-app.git
```

2. Navigate to the project directory:

```bash
cd weather-forecast-app
```

3. Install dependencies using npm:

```bash
npm install
```

4. Create a `.env` file in the root directory of the project and add your API keys:

```bash
WEATHER_API_KEY=your_openweathermap_api_key
GEOCODING_API_KEY=your_mapquest_geocoding_api_key
```

## Usage

To run the project, execute the following command:

```bash
npm start
```

This will start the server, and you can access the application at `http://localhost:3000` in your web browser.

## Features

* Users can input a location to check tomorrow's weather forecast.
* The application displays whether tomorrow's weather includes rain or not.
* Utilizes Axios for making HTTP requests.
* Uses Express.js for handling server-side logic and routing.

## Structure

* `index.js`: Main server-side script containing the Express.js application.
* `public`: Directory for static files.
* `views`: Directory containing EJS templates for rendering HTML pages.

## Credits

This project was created by Akın Mert Bür.

## License

This project is licensed under the `MIT License`.

You can copy this content and save it as `ReadMe.md` in your project directory.
