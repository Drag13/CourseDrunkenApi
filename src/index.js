const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const {
  courseHandler,
  searchLessonHandler,
} = require("./api/course.controller");

const {
  createUserHandler,
  getDefaultUserHandler,
} = require("./api/user.controller");

const { getDefaultPrimeValue } = require("./api/prime.controller");

const {
  createHero,
  getHero,
  getHeroes,
  updateHero,
  deleteAllHeroes,
} = require("./api/hero.controller");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT ?? 3000;

app.get("/course", courseHandler);

app.get("/lesson/:name", searchLessonHandler);

app.get("/user/default", getDefaultUserHandler);
app.post("/user", createUserHandler);

app.get("/factorial/initialValue/:value", getDefaultPrimeValue);

app.get("/hero", getHeroes);
app.get("/hero/:id", getHero);
app.post("/hero", createHero);
app.put("/hero", updateHero);
app.delete("/hero", deleteAllHeroes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
