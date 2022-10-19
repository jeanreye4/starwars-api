import { Router } from "express";
import * as controllers from "../controllers/anime.js";

const router = Router();

router.get("/animes", controllers.getAnimes);
router.get("/anime/:id", controllers.getAnime);
router.post("/animes", controllers.createAnime);
router.put("/anime/:id", controllers.updateAnime);
router.delete("/anime/:id", controllers.deleteAnime);

export default router;