var dbConn = require("../config/db.config");
//Course object create
var Course = function (course) {
  this.name = course.name;
  this.days_to_complete = course.days_to_complete;
  this.short_description = course.short_description;
  this.type = course.type;
};

function showResult(err, res, result) {
  if (err) {
    console.log("error: ", err);
    result(err, null);
  } else result(null, res);
}

Course.addCourse = function (newCourse, result) {
  dbConn.query("INSERT INTO courses set ?", newCourse, (req, res) =>
    showResult(req, res, result)
  );
};

Course.findCourseById = function (id, result) {
  dbConn.query("Select * from courses where id = ? ", id, (req, res) =>
    showResult(req, res, result)
  );
};

Course.findAllCourses = function (result) {
  dbConn.query("Select * from courses", (req, res) =>
    showResult(req, res, result)
  );
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
    (req, res) => showResult(req, res, result)
  );
};

Course.deleteCourse = function (id, result) {
  dbConn.query("DELETE FROM courses WHERE id = ?", [id], (req, res) =>
    showResult(req, res, result)
  );
};

module.exports = Course;
