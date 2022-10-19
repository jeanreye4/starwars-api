import { Router } from "express";
import animeRoutes from "./anime.js"

const router = Router()

router.get("/", (req, res) => res.send("THIS IS API ROOT"))
router.use("/", animeRoutes)

export default router