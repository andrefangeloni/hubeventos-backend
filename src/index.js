const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("custom-env").env();

const app = express();

mongoose.connect(
  "mongodb+srv://dba:dba1234@cluster0-vomcv.mongodb.net/hubeventos?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(require("./routes"));

app.listen(3333);
