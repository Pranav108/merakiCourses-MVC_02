const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/course.routes");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/api/v1/courses/", routes);

app.listen(3002, () => {
  console.log(`Server is listening on port 3002`);
});
