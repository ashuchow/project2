const router = require('express').Router();
let Hotel = require('../models/hotel.model');

router.route('/').get((req, res) => {
  Hotel.find()
    .then(hotels => res.json(hotels))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
      const username = req.body.username;
      const city = req.body.city;
      const description = req.body.description;
      const room = req.body.room;
      const expense = req.body.expense;
      const duration = Number(req.body.duration);
      const price = Number(req.body.price);
      const date = Date.parse(req.body.date);

  const newHotel = new Hotel({
    username,
    city,
    description,
    room,
    expense,
    duration,
    price,
    date,
  });

  newHotel.save()
  .then(() => res.json('Hotel added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Hotel.findById(req.params.id)
    .then(hotel => res.json(hotel))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Hotel.findByIdAndDelete(req.params.id)
    .then(() => res.json('Hotel deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Hotel.findById(req.params.id)
    .then(hotel => {
        hotel.username = req.body.username;
        hotel.city = req.body.city;
        hotel.description = req.body.description;
        hotel.room = req.body.room;
        hotel.expense = req.body.expense;
        hotel.duration = Number(req.body.duration);
        hotel.price = Number(req.body.price);
        hotel.date = Date.parse(req.body.date);

      hotel.save()
        .then(() => res.json('Hotel updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;