const coinFlip = (req, res) => {
  const times = parseInt(req.query.times, 10) || 1;
  const results = [];

  for (let i = 0; i < times; i++) {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    results.push(result);
  }

  res.status(200).json({ result: results });
};

const diceRoll = (req, res) => {
  const times = parseInt(req.query.times) || 1;
  const results = [];

  for (let i = 0; i < times; i++) {
    const result = Math.floor(Math.random() * 6) + 1;
    results.push(result);
  }

  res.status(200).json({ result: results });
};

const randomNumber = (req, res) => {
  const min = parseInt(req.query.min) || 1;
  const max = parseInt(req.query.max) || 100;

  if (min >= max) {
    return res.status(400).json({
      error: "Min should be less than max.",
    });
  }

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  res.status(200).json({
    result: result,
  });
};

module.exports = { coinFlip, diceRoll, randomNumber };
