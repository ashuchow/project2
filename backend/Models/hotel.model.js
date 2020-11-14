const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  username: { type: String, required: true },
  city: {type: String, required: true},
  description: { type: String, required: true },
  room: { type: String, required: true },
  class: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;