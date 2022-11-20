const express = require("express");
const courseRaw = require("./course.json");
const { rnd10 } = require("./rnd");
const cors = require("cors");
const app = express();
app.use(cors());

const port = process.env.PORT ?? 3000;

app.get("/course", (_, res) => {
  const rnd = rnd10();

  if (rnd < 4) {
    return res.status(500).send("Something went wrong");
  }

  const maybeCourse = getDrunkenCourse();
  res.send(maybeCourse);
});

function getDrunkenCourse() {
  const random10 = rnd10();
  if (random10 < 4) {
    return null;
  }

  if (random10 < 7) {
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
