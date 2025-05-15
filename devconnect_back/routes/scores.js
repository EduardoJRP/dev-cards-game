var express = require("express");
const env = require("./env");
var router = express.Router();
const { createClient } = require("@supabase/supabase-js");

// Setup Supabase client
const supabaseUrl = env.SUPABASE_URL;
const supabaseKey = env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// general scoreboard
router.get("/", async (req, res) => {
  const { data, error } = await supabase.rpc("get_user_scores");
  if (error) {
    return res.status(500).json({ error: "Error fetching scores" });
  }
  res.json(data);
});

router
  .route("/:game_id")
  // game scoreboard
  .get(async (req, res) => {
    const { game_id } = req.params;
    //const { data, error } = await supabase.from("scores").select("*").eq("game_id", Number(game_id));
    const { data, error } = await supabase.rpc("get_game_scores", {
      game_id_param: Number(game_id),
    });
    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: `Error fetching scores for game ${game_id}` });
    }
    res.json(data);

    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: `Error fetching scores for game ${game_id}` });
    }
    res.json(data);
  });

router.post("/", async (req, res) => {
  // insert
  // WARNING: must get user_id from auth instead of body...
  //const user_id = req.user_id; // !!!
  const { game_id, score_points, user_id } = req.body;
  const today = new Date();
  const score_date = today.toISOString();
  const { data, error } = await supabase
    .from("scores")
    .insert([{ user_id, game_id, score_points, score_date }]);

  if (error) return res.status(500).json({ error });
  res.status(201).json(data);
});

router.put("/", async (req, res) => {
  const user_id = req.user_id;
  const { game_id, score_points } = req.body;
  const today = new Date();
  const score_date = today.toISOString();
  const { data, error } = await supabase
    .from("scores")
    .update({ score_points })
    .match({ user_id, game_id, score_date });

  if (error) return res.status(500).json({ error });
  res.json(data);
});

router.delete("/", async (req, res) => {
  const user_id = req.user_id;
  const { game_id } = req.body;
  const today = new Date();
  const score_date = today.toISOString();
  const { data, error } = await supabase
    .from("scores")
    .delete()
    .match({ user_id, game_id, score_date })
    .select();

  if (error) return res.status(500).json({ error });
  res.json({ deleted: data.length });
});

router.param("user_id", (req, res, next, user_id) => {
  req.user_id = user_id;
  next();
});

module.exports = router;
