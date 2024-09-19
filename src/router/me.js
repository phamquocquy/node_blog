const express = require("express");
const router = express.Router();

const meController = require("../app/controllors/MeController");

router.get("/course", meController.storeCourse);

module.exports = router;
