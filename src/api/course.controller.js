const { rnd10 } = require("../helpers/math");
const courseRaw = require("../data/course.json");

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

function courseHandler(_, res) {
  const rnd = rnd10();

  if (rnd < 4) {
    return res.status(500).send("Something went wrong");
  }

  const maybeCourse = getDrunkenCourse();
  res.send(maybeCourse);
}

const matchLesson = ({ title, name }, key) => {
  if (!key || typeof key !== "string") return lesson;
  const search = key.toLocaleLowerCase().trim();
  return (
    title.toLocaleLowerCase().includes(search) ||
    name.toLocaleLowerCase().includes(search)
  );
};

function searchLessonHandler(req, res) {
  const rnd = rnd10();

  if (rnd < 4) {
    return res.status(500).send("Something went wrong");
  }

  const lessonName = req.params.name ?? "";

  const lesson = courseRaw.lessons.filter((lesson) =>
    matchLesson(lesson, lessonName)
  );

  res.send(lesson);
}

module.exports = {
  courseHandler,
  searchLessonHandler,
};
