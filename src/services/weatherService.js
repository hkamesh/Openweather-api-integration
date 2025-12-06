import axios from "axios";
import { saveCache, loadCache } from "../utils/cache.js";

const API_KEY = process.env.OPENWEATHER_KEY || "f34ddc3835dfb18d1339a544fbfa1dc5";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchCurrentWeather = async (city) => {
  try {
    const cached = loadCache(city, "current");
    if (cached) return cached;

    const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url, { timeout: 5000 });

    if (!response.data || !response.data.main) throw new Error("Malformed data received");

    saveCache(city, "current", response.data);
    return response.data;
  } catch (err) {
    throw new Error("Failed to fetch current weather: " + err.message);
  }
};

export const fetchForecast = async (city) => {
  try {
    const cached = loadCache(city, "forecast");
    if (cached) return cached;

    const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url, { timeout: 5000 });

    if (!response.data || !response.data.list) throw new Error("Malformed forecast data");

    saveCache(city, "forecast", response.data);
    return response.data;
  } catch (err) {
    throw new Error("Failed to fetch forecast: " + err.message);
  }
};

export const filterForecast = async (city, filters) => {
  let items = (await fetchForecast(city)).list;

  if (filters.temp_min) items = items.filter(i => i.main.temp >= Number(filters.temp_min));
  if (filters.temp_max) items = items.filter(i => i.main.temp <= Number(filters.temp_max));
  if (filters.condition) {
    items = items.filter(i =>
      i.weather[0].description.toLowerCase().includes(filters.condition.toLowerCase())
    );
  }
  return items;
};

export const getForecastDetail = async (city, id) => {
  const data = await fetchForecast(city);
  const index = Number(id);

  if (index < 0 || index >= data.list.length) throw new Error("Invalid ID");
  return data.list[index];
};
