import Anime from "../models/Anime.js"

export const getAnimes = async (req, res) => {
  try {
    const animes = await Anime.find()
    res.json(animes)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
}

export const getAnime = async (req, res) => {
  try {
    const { id } = req.params;
    const anime = await Anime.findById(id);

    if (anime) {
      return res.json(anime);
    }

    return res.json(404).json({ message: "Character not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.messsage });
  }
};

export const getAnimeByTitle = async (req, res) => {
  try {
    const { anime } = req.params;
    const animed = await Anime.find({anime: anime});

    if (animed) {
      return res.json(animed);
    }

    return res.json(404).json({ message: "Character not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.messsage });
  }
}

export const createAnime = async (req, res) => {
  try {
    const animes = new Anime(req.body);
    await animes.save();
    res.status(201).json(animes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.messsage });
  }
};

export const updateAnime = async (req, res) => {
  try {
    const { id } = req.params;
    const anime = await Anime.findByIdAndUpdate(id, req.body);
    res.status(201).json(anime);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.messsage });
  }
};

export const deleteAnime = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Anime.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Anime delted!");
    }
    throw new Error("Character not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.messsage });
  }
};