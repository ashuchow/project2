/* eslint-disable no-undef */
const router = require("express").Router();
//const http = require('http').createServer(app);

const Amadeus = require("amadeus");
const amadeus = new Amadeus({
  clientId: "JyMEanv627rBJ3Br3fSCZaoFfO6IEBnO",
  clientSecret: "mAJUPfvG2aeXmBj0",
});

router.post("/hotelsearch", async function (req, res) {
  console.log(req.query);
  city = req.query.city;
  radius = req.query.radius;
  unit = req.query.unit;
  inDate = req.query.inDate;
  outDate = req.query.outDate;
  locationArrival = req.query.locationArrival;
  response = await amadeus.shopping.hotelOffers
    .get({
      cityCode: city,
      radius: radius,
      radiusUnit: "KM",
      checkInDate: inDate,
      checkOutDate: outDate,
    })
    .catch((err) => console.log(err));
  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

module.exports = router;
