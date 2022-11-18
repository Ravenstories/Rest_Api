const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

//http://localhost:8081
var corsOptions = {
  origin: "0.0.0.0"
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 8080;
app.listen(port, '0.0.0.0');
console.log(`Running at '0.0.0.0':${port}`);
