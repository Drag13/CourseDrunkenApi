function getDefaultPrimeValue(req, res) {
  const defaultValue = req.params.value;
  return res.send({ value: defaultValue ?? 12_000 });
}

module.exports = {
  getDefaultPrimeValue,
};
