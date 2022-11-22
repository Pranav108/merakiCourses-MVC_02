exports.getAllCourses = (db) => db.select("*").from("courses");

exports.addCourse = (db, newCourse) =>
  db
    .insert(newCourse)
    .into("courses")
    .then((rows) => rows[0]);

exports.getCourseById = (db, id) =>
  db.from("courses").select("*").where("id", id).first();

exports.deleteCourse = (db, id) => db("courses").where({ id }).delete();

exports.updateCourse = (db, id, courseField) =>
  db("courses").where({ id }).update(courseField);
