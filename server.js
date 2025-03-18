const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const DbPool = require('./src/config/database')
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

//connect database
app.get('/get-database', async (req, res) => {
  try {
    const sqlQuery = "select * from users"
    const [rows] = await DbPool.execute(sqlQuery)

    res.status(200).json({
      message: "get All Data success",
      data : rows
    })
  } catch(error) {
    res.status(500).json({
      message : "Gett All Data Failed",
      error : error.message
    })
  }
})
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_DATABASE:", process.env.DB_DATABASE);

app.listen(port, () => {
  console.log(`Server runing http://localhost:${port}`);
});
