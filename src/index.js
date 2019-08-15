const express = require("express");
const mongoose = require("mongoose");
require("custom-env").env();

const app = express();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.listen(3333);
