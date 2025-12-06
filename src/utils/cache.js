import fs from "fs";
import path from "path";

const CACHE_DIR = path.join(process.cwd(), "cache");

if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR);

export const saveCache = (city, type, data) => {
  const filePath = path.join(CACHE_DIR, `${city}_${type}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export const loadCache = (city, type) => {
  const filePath = path.join(CACHE_DIR, `${city}_${type}.json`);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath);
    return JSON.parse(content);
  }
  return null;
};
