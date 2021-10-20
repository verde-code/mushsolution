function lm35(min, max) {
  min = typeof min == "undefined" ? 18 : min;
  max = typeof max == "undefined" ? 25 : max;

  let random = Math.random() * (max - min) + min;

  return random;
}

module.exports = { lm35 };
