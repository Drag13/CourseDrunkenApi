function getInitialFactorialValue(_, res) {
  return res.send({ value: 12_5000 });
}

module.exports = {
  getInitialFactorialValue,
};
