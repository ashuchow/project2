const router = require('express').Router();
let Flight = require('../models/flight.model');

router.route('/').get((req, res) => {
  Flight.find()
    .then(flights => res.json(flights))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
      const username = req.body.username;
      const fromCity = req.body.fromCity;
      const toCity = req.body.toCity;
      const seat = req.body.seat;
      const airline = req.body.airline;
      const duration = Number(req.body.duration);
      const price = Number(req.body.price);
      const date = Date.parse(req.body.date);

  const newFlight = new Flight({
    username,
    fromCity,
    toCity,
    seat,
    airline,
    duration,
    price,
    date,
  });

  newFlight.save()
  .then(() => res.json('Flight added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Flight.findById(req.params.id)
    .then(flight => res.json(flight))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Flight.findByIdAndDelete(req.params.id)
    .then(() => res.json('Flight deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Flight.findById(req.params.id)
    .then(flight => {
      flight.username = req.body.username;
      flight.fromCity = req.body.fromCity;
      flight.toCity = req.body.toCity;
      flight.seat = req.body.seat;
      flight.airline = req.body.airline;
      flight.duration = Number(req.body.duration);
      flight.price = Number(req.body.price);
      flight.date = Date.parse(req.body.date);

      flight.save()
        .then(() => res.json('Flight updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;