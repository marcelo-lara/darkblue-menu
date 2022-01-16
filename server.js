'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://my-root-user:my-root-password@database', {useNewUrlParser: true,})
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./client/src'))
app.get("/", (req, res) => {
  res.json({ message: "Server is running :D" });
});

require('./app/routes/app.routes.js')(app);

let PORT = 5010;
app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
});