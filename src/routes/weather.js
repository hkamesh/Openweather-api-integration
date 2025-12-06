import express from "express";
import {
  fetchCurrentWeather,
  fetchForecast,
  filterForecast,
  getForecastDetail
} from "../services/weatherService.js";

const router = express.Router();

router.get("/current/:city", async (req, res) => {
  try {
    const data = await fetchCurrentWeather(req.params.city);
    res.json(data);
  } catch (err) {
    console.error("Current Weather Error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/forecast/:city", async (req, res) => {
  try {
    const data = await fetchForecast(req.params.city);
    res.json(data);
  } catch (err) {
    console.error("Forecast Error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/forecast/:city/filter", async (req, res) => {
  try {
    const data = await filterForecast(req.params.city, req.query);
    res.json(data);
  } catch (err) {
    console.error("Filter Forecast Error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/forecast/:city/detail/:id", async (req, res) => {
  try {
    const data = await getForecastDetail(req.params.city, req.params.id);
    res.json(data);
  } catch (err) {
    console.error("Forecast Detail Error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
