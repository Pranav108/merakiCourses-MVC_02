const Course = require("../models/courses.models");
const axios = require("axios");

exports.seeder = function (req, res, next) {
  const db = req.app.get("db");
  db.schema.hasTable("courses").then(function (exists) {
    if (!exists) {
      db.schema
        .createTable("courses", function (table) {
          table.increments("id").primary();
          table.string("name");
          table.string("type");
          table.integer("days_to_complete");
          table.string("short_description");
        })
        .then(function () {
          axios
            .get("https://api.merakilearn.org/courses")
            .then((response) => {
              const filterdData = [];
              const arr = response.data;
              for (let i = 20; i < 30; i++) {
                const obj = {
                  name: arr[i].name,
                  short_description: arr[i].short_description,
                  type: arr[i].type,
                  days_to_complete: parseInt(arr[i].days_to_complete),
                };
                filterdData.push(obj);
              }
              db("courses")
                .insert(filterdData)
                .then(() =>
                  res.send({
                    error: false,
                    status: "success",
                    msg: "data seeded successfully",
                  })
                );
            })
            .catch((err) => console.log(err));
        });
    } else res.send("Table exists - data already seeded");
  });
};

exports.getAllCourses = function (req, res) {
  const db = req.app.get("db");
  Course.getAllCourses(db).then((data) =>
    res.send({
      error: false,
      status: "success",
      length: data.length,
      data,
    })
  );
};

exports.addCourse = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    const db = req.app.get("db");
    Course.addCourse(db, req.body).then((data) =>
      res.send({
        error: false,
        status: "success",
        message: "course successfully added",
        data: { id: data, ...req.body },
      })
    );
  }
};

exports.getCourses = function (req, res) {
  const db = req.app.get("db");
  Course.getCourseById(db, req.params.id).then((data) =>
    res.send({
      error: false,
      status: "success",
      data,
    })
  );
};

exports.updateCourse = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    const db = req.app.get("db");
    Course.updateCourse(db, req.params.id, req.body).then(() =>
      res.send({
        error: false,
        status: "success",
        message: "course successfully updated",
      })
    );
  }
};

exports.deleteCourse = function (req, res) {
  const db = req.app.get("db");
  Course.deleteCourse(db, req.params.id).then((data) =>
    res.send({
      error: false,
      status: "success",
      message: "course successfully deleted",
    })
  );
};
