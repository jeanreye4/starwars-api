import db from "./db/connection.js";
import routes from "./routes/index.js";
import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";

const port = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/", routes);

db.on("connected", () => {
  console.clear()
  console.log(chalk.blue("Connected to MongoDB"));
  app.listen(port, () => {
    console.log(
      `listening to port ${port}`
      );
    });
  });