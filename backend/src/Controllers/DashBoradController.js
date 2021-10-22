const Spot = require("../models/Spot");
const User = require("../Models/User");

module.exports = {
  async show(req, res) {
    const { user_id } = req.header;

    const spots = await Spot.find({user_id});

    return res.json(spots);

  },
};
