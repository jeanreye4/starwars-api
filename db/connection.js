import mongoose from "mongoose";

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const connectionString =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/animeDB";

mongoose.connect(connectionString, mongooseConfig);

mongoose.connection.on("connected", () =>
  console.log("connected to database!")
);
mongoose.connection.on("disconnected", () =>
  console.log("Disconnected to database!")
);
mongoose.connection.on("error", (error) =>
  console.error("Error! look for:", error)
);

export default mongoose.connection;
