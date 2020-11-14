const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  username: { type: String, required: true },
  fromCity: {type: String, required: true},
  toCity: { type: String, required: true },
  seat: { type: String, required: true },
  airline: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;

// {
//     "username" : "neil",
//     "fromCity" : "Mumbai",
//     "toCity" : "",
//     "seat" : "",
//     "airline": "",
//     "duration": ,
//     "price" : ,
//     "date" :
// }