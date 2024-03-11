const express = require('express');
const router = express.Router();

router.get('/cool', function(req, res) {
  res.send("Ну, ви крутий!");
});

module.exports = router;
