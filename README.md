# OpenWeather API Integration – Internship Assignment

## Overview

This mini-application demonstrates integration with the **OpenWeather API**.  

It allows users to:

- Fetch **current weather** for any city.  
- Retrieve a **5-day weather forecast**.  
- Apply **filters** on forecasts (temperature range, weather condition).  
- View **detailed information** for individual forecast entries.  
- Use **local caching** to reduce API calls and improve performance.  

The project is built with **Node.js**, **Express**, and **Axios**, with proper **error handling** for network issues, malformed responses, and invalid inputs.

---

## Features

| Feature | Endpoint | Description |
|---------|----------|-------------|
| Current weather | `/api/weather/current/:city` | Returns temperature, humidity, wind, weather conditions, etc. |
| 5-day forecast | `/api/weather/forecast/:city` | Returns forecast data every 3 hours for the next 5 days. |
| Filtered forecast | `/api/weather/forecast/:city/filter` | Apply filters: `temp_min`, `temp_max`, `condition`. |
| Forecast detail | `/api/weather/forecast/:city/detail/:id` | View detailed forecast for a specific item by ID. |

---

Notes:

Free OpenWeather API keys may take a few minutes to activate.

Cache folder is automatically created if missing.

Node.js (v14+) is required.

The project uses Express and Axios for API handling and routing.

