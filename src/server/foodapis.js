const fs = require("fs");

exports.allFoods = JSON.parse(
  fs.readFileSync(`${__dirname}/data/api.json`, "utf-8")
);
exports.top20 = JSON.parse(
  fs.readFileSync(`${__dirname}/data/top20.json`, "utf-8")
);
