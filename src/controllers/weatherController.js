import {
  fetchCurrentWeather,
  fetchForecast,
  filterForecast,
  getForecastDetail
} from "../services/weatherService.js";

export const getCurrentWeather = async (req, res) => {
  try {
    const data = await fetchCurrentWeather(req.params.city);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getForecast = async (req, res) => {
  try {
    const data = await fetchForecast(req.params.city);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFilteredForecast = async (req, res) => {
  try {
    const { city } = req.params;
    const filters = req.query;
    const data = await filterForecast(city, filters);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCityDetails = async (req, res) => {
  try {
    const { city, id } = req.params;
    const detail = await getForecastDetail(city, id);
    res.json(detail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
