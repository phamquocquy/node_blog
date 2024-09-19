const express = require("express");
const router = express.Router();

const courseController = require("../app/controllors/CourseController")

router.get("/:id/edit",courseController.edit);
router.put("/:id",courseController.update);
router.get("/create",courseController.create);
router.post("/store",courseController.store);
router.get("/:slug",courseController.detail);

module.exports = router;