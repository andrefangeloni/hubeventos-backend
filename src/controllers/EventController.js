const Event = require("../models/Event");

module.exports = {
  async index(req, res) {
    const events = await Event.find().sort("-createdAt");

    return res.json(events);
  },

  async store(req, res) {
    const { author, place, description, name, value, date, hour } = req.body;
    const { filename: image } = req.file;

    const event = await Event.create({
      author,
      place,
      description,
      name,
      value,
      date,
      hour,
      image
    });

    return res.json(event);
  }
};
