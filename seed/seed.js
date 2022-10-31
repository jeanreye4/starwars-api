import db from "../db/connection.js";
import data from "../db/data.json" assert { type: "json" };
import Anime from "../models/Anime.js";

const insertData = async () => {
  await db.dropDatabase();
  await Anime.insertMany(data);
  await db.close();
};

insertData();
