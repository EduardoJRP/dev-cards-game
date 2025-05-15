var express = require("express");
const env = require("./env");
var router = express.Router();
const { createClient } = require("@supabase/supabase-js");

// Setup Supabase client
const supabaseUrl = env.SUPABASE_URL;
const supabaseKey = env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// logged user
router.get("/", async (req, res, next) => {
  // query public games in DB
  const { data, error } = await supabase
    //.from("games").select("*").eq("is_public", true);
    .rpc("get_public_games_info");

  if (error) {
    console.error(error);
    return res.status(500).json({ error: `Error fetching public games` });
  }
  res.json(data);
});

// logged admin
router.get("/all", async (req, res, next) => {
  // query all games in DB
  const { data, error } = await supabase.from("games").select("*");

  if (error) {
    console.error(error);
    return res.status(500).json({ error: `Error fetching all games` });
  }
  res.json(data);
});

router
  .route("/:game_id")
  .get(async (req, res) => {
    const { game_id } = req.params;
    const user_id = req.user_id;
    const { data, error } = await supabase
      .from("games")
      .select("*")
      .eq("game_id", Number(game_id));
    if (error) {
      console.error(error);
      return res.status(500).json({ error: `Error fetching game ${game_id}` });
    }
    res.json(data);
  })
  .put(async (req, res) => {
    // query game & creator user id and edit info in DB
    const { game_id } = req.params;
    const user_id = req.user_id ?? 1; // !!!

    const { name, description, is_public, questions } = req.body;
    const today = new Date();
    const date = today.toISOString();
    const { data, error } = await supabase
      .from("games")
      .update({ name, description, is_public, questions })
      .match({ user_id, game_id });
    if (error) return res.status(500).json({ error });
    res.json(data);
  })
  .delete(async (req, res) => {
    const user_id = req.user_id ?? 1; // !!!
    const { game_id } = req.params;
    const today = new Date();
    const score_date = today.toISOString();
    const { data, error } = await supabase
      .from("games")
      .delete()
      .match({ user_id, game_id })
      .select();

    if (error) return res.status(500).json({ error });
    res.json({ deleted: data.length });
  });

router.post("/", async (req, res) => {
  // create new game
  const user_id = req.user_id ?? 1; // !!!
  const { name, description, is_public, questions } = req.body;
  const { data, error } = await supabase
    .from("games")
    .insert([{ name, description, is_public, questions, user_id }]);

  if (error) return res.status(500).json({ error });
  res.status(201).json(data);
});

router.param("user_id", (req, res, next, user_id) => {
  req.user_id = user_id;
  next();
});

module.exports = router;
