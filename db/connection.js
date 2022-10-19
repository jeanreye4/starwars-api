import mongoose from "mongoose";

let mongooseConfig = {
  useNewUrlParser: true,
}

mongoose.connect("mongodb://127.0.0.1:27017/AnimeDB", mongooseConfig)

mongoose.connection.on("connected", () => console.log("connected to database!"))
mongoose.connection.on("disconnected", () => console.log("Disconnected to database!"))
mongoose.connection.on("error", error => console.error("Error! look for:", error))

export default mongoose.connection