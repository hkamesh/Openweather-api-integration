import express from "express";
import {
  getCurrentWeather,
  getForecast,
  getFilteredForecast,
  getCityDetails
} from "../controllers/weatherController.js";

const router = express.Router();

// Get current weather by city
router.get("/current/:city", getCurrentWeather);

// Get 5-day forecast
router.get("/forecast/:city", getForecast);

// Filter forecast (temperature/humidity/conditions)
router.get("/forecast/:city/filter", getFilteredForecast);

// Detailed view for a single forecast entry
router.get("/forecast/:city/detail/:id", getCityDetails);

export default router;
