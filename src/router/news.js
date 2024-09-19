const express = require("express");
const router = express.Router();

const newsController = require("../app/controllors/NewsController")

// router.get("/detail", (req, res) => {
//   res.send("detail");
// });
router.get("/:slug",newsController.show);

router.get("/",newsController.index);

module.exports = router;