const express = require('express');
const mongoose = require('mongoose');
const routes = require("./controllers");
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});




app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });