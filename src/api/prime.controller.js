const GET_PRIME_DELAY_MS = 150;

function getDefaultPrimeValue(req, res) {
  const defaultValue = req.params.value;

  setTimeout(() => {
    res.send({ value: defaultValue ?? 12_000 });
  }, GET_PRIME_DELAY_MS);
}

module.exports = {
  getDefaultPrimeValue,
};
