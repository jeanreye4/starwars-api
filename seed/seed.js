import db from "../db/connection.js"
import data from "../db/data.json" assert {type: "json"}
import Anime from "../models/Anime.js"

const insertData = async () => {
  await Anime.deleteMany()
  await Anime.insertMany(data)
  db.close()
}
insertData()
// let animeData = data.map(item => {
//   let Anime = {}
//   Anime.anime = item.anime
//   Anime.character = item.character
//   Anime.quote = item.quote
//   return Anime
// })

// console.log(animeData)