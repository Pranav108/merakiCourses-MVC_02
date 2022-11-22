const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const db = require("./config/db.config");
const routes = require("./routes/courses.routes");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.set("db", db);

app.use("/api/v1/courses/", routes);

app.listen(3001, () => {
  console.log(`Server is listening on port 3001`);
});
