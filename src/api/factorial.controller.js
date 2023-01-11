function getInitialFactorialValue(_, res) {
  return res.send({ value: 12_000 });
}

module.exports = {
  getInitialFactorialValue,
};
