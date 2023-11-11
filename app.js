// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const bookmarks = require("./controllers/bookmarksController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});

const bookmarksController = require("./controllers/bookmarksController.js");
app.use("/bookmarks", bookmarksController);



// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
