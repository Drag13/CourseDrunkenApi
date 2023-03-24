const joi = require("joi");
const heroes = new Map();

function getHeroes(req, res) {
  res.send([...heroes.values()]);
}

function getHero(req, res) {
  const id = req.params.id;

  if (id == null) {
    return res.status(400).send("Bad request");
  }

  const hero = heroes.get(id);
  return hero ? res.send(hero) : res.status(404).send("Not Found");
}

const heroScheme = joi.object({
  id: joi.string().required(),
  name: joi.string().required().min(4),
  str: joi.number().required().min(1).max(18),
});

function createHero(req, res) {
  if (heroes.size > 1000) {
    return res.status(500).send("Memory is full");
  }

  const maybeHero = req.body;

  const validationResult = heroScheme.validate(maybeHero, {
    abortEarly: false,
  });

  if (validationResult.error) {
    const errors = validationResult.error.details.map(({ message }) => ({
      error: message,
    }));

    return res.status(400).send(errors);
  }

  if (heroes.has(maybeHero.id)) {
    return res.status(400).send("Bad request");
  }

  heroes.set(maybeHero.id, maybeHero);

  return res.send(null);
}

function updateHero(req, res) {
  const maybeHero = req.body;

  const validationResult = heroScheme.validate(maybeHero, {
    abortEarly: false,
  });

  if (validationResult.error) {
    const errors = validationResult.error.details.map(({ message }) => ({
      error: message,
    }));

    return res.status(400).send(errors);
  }

  if (!heroes.has(maybeHero.id)) {
    return res.status(400).send("Bad request");
  }

  heroes.set(maybeHero.id, maybeHero);

  return res.send(null);
}

function deleteAllHeroes() {
  heroes.clear();
  return res.send(null);
}

module.exports = {
  updateHero,
  getHero,
  getHeroes,
  createHero,
  deleteAllHeroes,
};
