const { data } = require("autoprefixer");
const { allFoods, top20 } = require("../foodapis");

exports.getAllApi = (req, res) => {
  res.status(200).json({ status: "success", data: allFoods });
};
exports.getTop20 = (req, res) => {
  res.status(200).json({ status: "success", data: top20 });
};
exports.getCountry = (req, res) => {
  const country = req.params.country.toLowerCase();
  const popo = req.query.search?.toLowerCase();
  let countryData = allFoods[country];
  console.log(req.params);
  console.log(req.query);
  if (countryData) {
    const filteredData = popo
      ? countryData.filter((el) => el.name.toLowerCase().includes(popo))
      : countryData;

    res.status(200).json({
      status: "success",
      data: filteredData,
    });
  } else {
    res.status(404).json({ status: "error", message: "Country not found" });
  }
};
