const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const EventController = require("./controllers/EventController");
const SubscribeController = require("./controllers/SubscribeController");
const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get("/events", EventController.index);
routes.post("/events", upload.single("image"), EventController.store);

routes.post("/events/:id/subscribe", SubscribeController.store);

module.exports = routes;
