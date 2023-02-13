const { rnd10 } = require("../helpers/math");
const joi = require("joi");

const userSchema = joi.object({
  name: joi.string().required().min(4),
  password: joi.string().required().min(6),
  passwordConfirmation: joi.string().equal(joi.ref("password")).required(),
});

function createUserHandler(req, res) {
  const maybeUser = req.body;

  const validationResult = userSchema.validate(maybeUser, {
    abortEarly: false,
  });

  if (validationResult.error) {
    const errors = validationResult.error.details.map(({ message }) => ({
      error: message,
    }));

    return res.status(400).send(errors);
  }

  const rnd = rnd10();

  if (rnd < 3) {
    return res.status(500).send("Something went wrong");
  }

  return res.send({ scoring: "SS" });
}

const defaultUser = { name: "Vitalii" };
const GET_USER_DELAY_MS = 5000;
function getDefaultUserHandler(_, res) {
  setTimeout(() => {
    res.send(defaultUser);
  }, GET_USER_DELAY_MS);
}

module.exports = {
  createUserHandler,
  getDefaultUserHandler,
};

/**
fetch('http://localhost:3000/user', {body: JSON.stringify({name: 'test', password: '123123', passwordConfirmation: '123123'}), method: 'POST',   headers: {
      'Content-Type': 'application/json'
    }}).then(x=>x.json()).then(console.log);
 */
