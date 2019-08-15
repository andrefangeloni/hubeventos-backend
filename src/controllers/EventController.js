const Event = require("../models/Event");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

module.exports = {
  async index(req, res) {
    const events = await Event.find().sort("-createdAt");

    return res.json(events);
  },

  async store(req, res) {
    const { author, place, description, name, value, date, hour } = req.body;
    const { filename: image } = req.file;
    const [imageName] = image.split(".");
    const fileName = `${imageName}.jpg`;

    await sharp(req.file.path)
      .resize(500)
      .jpeg()
      .toFile(path.resolve(req.file.destination, "resized", fileName));

    fs.unlinkSync(req.file.path);

    const event = await Event.create({
      author,
      place,
      description,
      name,
      value,
      date,
      hour,
      image: fileName
    });

    req.io.emit("event", event);

    return res.json(event);
  }
};
