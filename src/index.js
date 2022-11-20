const express = require("express");
const courseRaw = require("./course.json");
const { rnd10 } = require("./rnd");
const cors = require("cors");
const app = express();
app.use(cors());

const port = process.env.PORT ?? 3000;

app.get("/course", (_, res) => {
  const maybeCourse = getDrunkenCourse();
  res.send(maybeCourse);
});

function getDrunkenCourse() {
  const random10 = rnd10();
  if (random10 < 1) {
    return null;
  }

  if (random10 < 2) {
    return [];
  }

  if (random10 < 5) {
    return {
      title: courseRaw.title,
      lessons: null,
    };
  }

  return courseRaw;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
