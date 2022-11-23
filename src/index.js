const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const {
  courseHandler,
  searchLessonHandler,
} = require("./api/course.controller");

const { createUserHandler } = require("./api/user.controller");

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT ?? 3000;

app.get("/course", courseHandler);
app.get("/lesson/:name", searchLessonHandler);
app.post("/user", createUserHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
