const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  googleId: String,
  thumbnail: String,
  phone: String,
  address: String,
  email: String,
  currentHotel: Object,
  currentFlight: Object,
  transactionFlight: Array,
  transactionHotel: Array,
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;