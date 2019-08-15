const Event = require("../models/Event");

module.exports = {
  async store(req, res) {
    const event = await Event.findById(req.params.id);
    event.subscribes += 1;
    await event.save();

    req.io.emit("subscribe", event);

    return res.json(event);
  }
};
