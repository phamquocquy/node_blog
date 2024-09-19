const Course = require("../model/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  //[GET] /
  storeCourse(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("me/store-courses", { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
  }
}

module.exports = new MeController();