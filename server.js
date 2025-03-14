const express = require("express");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();
const app = express();
const path = require("path");

//use public
app.use(express.static("src/public"));
const middlewareLogRequest = require("./src/middleware/logReq");

//template engine
app.set("views", path.join(__dirname, "src", "views")); //menentukan folder views
app.set("view engine", "ejs");
app.use(expressLayouts);

//router
const userRoute = require("./src/routes/users");
const indexRoute = require("./src/routes/indexRoutes");

//port
const port = process.env.PORT || 5000;
//middleware
app.use(middlewareLogRequest);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//index routes
app.use("/", indexRoute);
//users routes
app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`Server runing http://localhost:${port}`);
});
