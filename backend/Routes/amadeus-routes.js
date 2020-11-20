/* eslint-disable no-undef */
const router = require("express").Router();

const Amadeus = require("amadeus");
const amadeus = new Amadeus({
  clientId: "bRWyO7jZjY9KQ87Gq2MlxBR63HPUA957",
  clientSecret: "FqBBwXkq0p1dIIXN",
});

router.get(`/citySearch`, async (req, res) => { 
  console.log(req.query); 
  var keywords = req.query.keyword; 
  const response = await amadeus.referenceData.locations 
    .get({ 
      keyword: keywords, 
      subType: "CITY,AIRPORT", 
    }) 
    .catch((x) => console.log(x)); 
  try { 
    await res.json(JSON.parse(response.body)); 
  } catch (err) { 
    await res.json(err); 
  } 
});


router.post("/date", async function (req, res) { 
  console.log(req.query); 
  departure = req.query.departure; 
  arrival = req.query.arrival; 
  locationDeparture = req.query.locationDeparture; 
  locationArrival = req.query.locationArrival; 
  response = await amadeus.shopping.flightOffersSearch 
    .get({ 
      originLocationCode: locationDeparture, 
      destinationLocationCode: locationArrival, 
      departureDate: departure, 
      adults: "1", 
    }) 
    .catch((err) => console.log(err)); 
  try { 
    await res.json(JSON.parse(response.body)); 
  } catch (err) { 
    await res.json(err); 
  } 
}); 


router.post('/flightprice', async function(req, res) {
  res.json(req.body);
  inputFlight = req.body;
  console.log(req.body)
  const responsePricing = await amadeus.shopping.flightOffers.pricing.post(
      JSON.stringify({
        'data': {
          'type': 'flight-offers-pricing',
          'flightOffers': inputFlight
        }})).catch(err=>console.log(err))
   try {
    await res.json(JSON.parse(responsePricing.body));
  } catch (err) {
    await res.json(err);
  }
   })


module.exports = router;
