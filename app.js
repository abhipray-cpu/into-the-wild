const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
// const helmet = require("helmet");
// const morgan = require("morgan");
// const compression = require("compression");
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
const route = require("./router");
// const logStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
//   flags: "a",
// });
app.use(route);
// app.use(helmet());
// app.use(compression());
// app.use(morgan('combined'))
var port_number = process.env.PORT || 3000;
app.listen(port_number);
