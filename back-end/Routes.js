const { Router } = require("express");
const router = Router();

router.get("/h", (req, res) => {
  return res.send("wow");
});

module.exports = router;
