import mongoose from "mongoose";

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectionString =
  process.env.MONGO_URL || "mongodb://0.0.0.0:27017/AnimeDB";

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
