const Course = require("../model/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  //[GET] /course:slug
  detail(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("course/detail", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  create(req, res) {
    res.render("course/create");
  }

  store(req, res, next) {
    const reqParams = req.body;
    reqParams.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(reqParams);
    course.save().then((err) => {
      if (err) next();
      res.redirect("/");
    });
  }

  edit(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("course/edit", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  update(req, res, next) {
    console.log(req.params);
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect('/me/course')
      })
      .catch(next);
  }
}

module.exports = new CourseController();
