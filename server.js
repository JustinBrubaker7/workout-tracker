const express = require('express');
const mongoose = require('mongoose');
const routes = require("./controllers");
const path = require('path');
const logger = require("morgan");
const mongojs = require("mongojs");


const PORT = process.env.PORT || 3001;

const databaseUrl = "workout";
const collections = ["exersizes"];
const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());



app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

db.on("error", error => {
    console.log("Database Error:", error);
  });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});




app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });