OpenWeather API Integration Assignment
Overview

This project is a mini-application that fetches weather data from the OpenWeather API and provides:

Current weather data for a city

5-day forecast for a city

Filtered forecast based on temperature and weather condition

Detailed view for a specific forecast item

The project also implements local caching to reduce API calls and proper error handling.

Setup Instructions

Clone the repository

git clone <your-github-repo-link>
cd openweather-api-integration


Install dependencies

npm install


Create .env file in the root directory:

OPENWEATHER_KEY=YOUR_OPENWEATHER_API_KEY
PORT=5000


Replace YOUR_OPENWEATHER_API_KEY with a valid key from OpenWeather
.

Run the server

npm start


Server will start at http://localhost:5000

API Endpoints
1. Current Weather
GET /api/weather/current/:city


Example:

GET /api/weather/current/London


Response:

{
  "coord": { "lon": -0.1257, "lat": 51.5085 },
  "weather": [{ "main": "Rain", "description": "light rain" }],
  "main": { "temp": 11.61, "feels_like": 11.02, "humidity": 84 },
  "wind": { "speed": 6.69 },
  "name": "London",
  "cod": 200
}

2. Forecast
GET /api/weather/forecast/:city


Example:

GET /api/weather/forecast/London


Response: List of forecast items (every 3 hours for 5 days).

3. Filter Forecast
GET /api/weather/forecast/:city/filter?temp_min=<number>&temp_max=<number>&condition=<text>


Query Parameters (optional):

temp_min → minimum temperature

temp_max → maximum temperature

condition → weather description (e.g., clear, rain, clouds)

Example:

GET /api/weather/forecast/London/filter?temp_min=15&condition=clear


Response: Filtered forecast list.

4. Forecast Detail by ID
GET /api/weather/forecast/:city/detail/:id


Example:

GET /api/weather/forecast/London/detail/0


Response: Detailed forecast item for the given index.

Caching

Fetched data is saved in the cache/ folder:

cache/London_current.json
cache/London_forecast.json


This reduces API calls and speeds up responses.

Error Handling

Network failures, timeouts, and invalid responses are caught and returned as JSON:

{ "error": "Failed to fetch current weather: <error_message>" }


Invalid ID for forecast detail:

{ "error": "Invalid ID" }

Filters Implemented

temp_min → minimum temperature (°C)

temp_max → maximum temperature (°C)

condition → weather condition (partial match, case-insensitive)

Assumptions / Notes

Free OpenWeather API keys may take a few minutes to activate.

Cache folder is auto-created if missing.

The project uses Node.js, Express, Axios, and local JSON caching."# Openweather-api-integration" 
