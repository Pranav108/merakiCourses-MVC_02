"use strict";
const Course = require("../models/courses.models");

exports.getAllCourses = function (req, res) {
  Course.findAllCourses(function (err, course) {
    console.log("controller");
    if (err) res.send(err);
    res.send(course);
  });
};

exports.addCourse = function (req, res) {
  console.log(req.body);
  const new_course = new Course(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Course.addCourse(new_course, function (err, course) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Course added successfully!",
        data: course,
      });
    });
  }
};

exports.getCourses = function (req, res) {
  Course.findCourseById(req.params.id, function (err, course) {
    if (err) res.send(err);
    res.json(course);
  });
};

exports.updateCourse = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Course.updateCourseData(
      req.params.id,
      new Course(req.body),
      function (err, course) {
        if (err) res.send(err);
        res.json({ error: false, message: "course successfully updated" });
      }
    );
  }
};

exports.deleteCourse = function (req, res) {
  Course.delete(req.params.id, function (err, course) {
    if (err) res.send(err);
    res.json({ error: false, message: "Course successfully deleted" });
  });
};
