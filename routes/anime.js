import { Router } from "express";
import * as controllers from "../controllers/anime.js";

const router = Router();

router.get("/anime", controllers.getAnimes);
router.get("/anime/:id", controllers.getAnime);
router.get("/anime/title/:anime", controllers.getAnimeByTitle);
router.post("/anime", controllers.createAnime);
router.put("/anime/:id", controllers.updateAnime);
router.delete("/anime/:id", controllers.deleteAnime);

export default router;