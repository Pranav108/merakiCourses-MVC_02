"use strict";
var dbConn = require("../db.config");
//Course object create
var Course = function (course) {
  this.name = course.name;
  this.days_to_complete = course.days_to_complete;
  this.short_description = course.short_description;
  this.type = course.type;
};

function showResult(err, res) {
  if (err) {
    console.log("error: ", err);
    result(err, null);
  } else result(null, res);
}

Course.addCourse = function (newCourse, result) {
  dbConn.query("INSERT INTO courses set ?", newCourse, showResult);
};

Course.findCourseById = function (id, result) {
  dbConn.query("Select * from courses where id = ? ", id, showResult);
};

Course.findAllCourses = function (result) {
  dbConn.query("Select * from courses", showResult);
};

Course.updateCourseData = function (id, course, result) {
  dbConn.query(
    "UPDATE courses SET name=?,days_to_complete=?,short_description=?,type=? WHERE id = ?",
    [
      course.name,
      course.days_to_complete,
      course.short_description,
      course.type,
      id,
    ],
    showResult
  );
};

Course.delete = function (id, result) {
  dbConn.query("DELETE FROM courses WHERE id = ?", [id], showResult);
};

module.exports = Course;
