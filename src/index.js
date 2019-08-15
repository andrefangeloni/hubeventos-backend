const express = require("express");
const mongoose = require("mongoose");
require("custom-env").env();

const app = express();

mongoose.connect(
  "mongodb+srv://dba:dba1234@cluster0-vomcv.mongodb.net/hubeventos?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.use(require("./routes"));

app.listen(3333);
