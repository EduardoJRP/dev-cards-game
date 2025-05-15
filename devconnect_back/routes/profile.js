var express = require("express");
const env = require("./env");
var router = express.Router();
const { createClient } = require("@supabase/supabase-js");

// Setup Supabase client
const supabaseUrl = env.SUPABASE_URL;
const supabaseKey = env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// logged user
router
  .route("/:user_id")
  .get(async (req, res) => {
    const user_id = req.user_id;
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("user_id", Number(user_id));

    if (error) {
      console.error(error);
      return res.status(500).json({ error: `Error fetching user ${user_id}` });
    }
    res.json(data);
  })
  .put(async (req, res) => {
    // edit user at user_id
    const user_id = req.user_id;
    const { username, bio } = req.body;
    const today = new Date();
    const user_date = today.toISOString();
    const { data, error } = await supabase
      .from("users")
      .update({ username, bio })
      .match({ user_id });
    if (error) return res.status(500).json({ error });
    res.json(data);
  })
  .delete(async (req, res) => {
    // create user
    const user_id = req.user_id ?? 4; // !!!
    const { data, error } = await supabase
      .from("users")
      .delete()
      .match({ user_id })
      .select();

    if (error) return res.status(500).json({ error });
    res.json({ deleted: data.length });
  });

router.post("/", async (req, res) => {
  // create user
  const { username, bio } = req.body;
  const today = new Date();
  const user_date = today.toISOString();
  const { data, error } = await supabase
    .from("users")
    .insert([{ username, bio }]);

  if (error) return res.status(500).json({ error });
  res.json(data);
});

router.param("user_id", (req, res, next, user_id) => {
  req.user_id = user_id;
  next();
});

module.exports = router;
