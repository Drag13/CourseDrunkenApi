const express = require("express");
const cors = require("cors");
const app = express();
const {
  courseHandler,
  searchLessonHandler,
} = require("./api/course.controller");

app.use(cors());

const port = process.env.PORT ?? 3000;

app.get("/course", courseHandler);
app.get("/lesson/:name", searchLessonHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
