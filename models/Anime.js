
import mongoose from "mongoose";
const Schema = mongoose.Schema

let Anime = new Schema({
  anime: String,
  character: String,
  quote: String,
  img: String
})

export default mongoose.model("animes", Anime) 