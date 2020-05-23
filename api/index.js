// const express = require("express");
// const mysql = require("mysql");

// const app = express();

// app.get("/", (req, res) => {
//   console.log("istek geldi");
//   res.status(200).json();
// });

// module.exports = {
//   path: "/api",
//   handler: app
// };

const express = require("express");
const mysql = require("mysql");

// database
// mongoose.connect("mongodb://localhost/videosinif")

// Collection

// title
// couponCode

const app = express();

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "videosinif"
});
connection.connect();

app.get("/", (req, res) => {
  console.log("GET istegi geldi...");

  connection.query("SELECT * from courses", (err, results, fields) => {
    // console.log(results)
    res.status(200).json({
      courses: results
    });
  });
});

module.exports = {
  path: "/api",
  handler: app
};
