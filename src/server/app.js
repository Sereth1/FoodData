//! controllers
const {
  getAllApi,
  getCountry,
  getTop20,
} = require("./controllers/apiControllers");
//!
const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");

//! middleware
app.use(morgan("combined"));
//!
const cors = require("cors");
app.use(cors());
app.use(express.json());
//!routes
app.get("/api/v1/all", getAllApi);
app.get("/api/v1/:country", getCountry);
app.get("/api/v2/top", getTop20);

//!server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
