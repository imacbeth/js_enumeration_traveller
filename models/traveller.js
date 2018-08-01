const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = [];
  this.journeys.forEach((journey) => {
    startLocations.push(journey.startLocation);
  })
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = [];
  this.journeys.forEach((journey) => {
    endLocations.push(journey.endLocation);
  })
  return endLocations;
};

Traveller.prototype.getModesOfTransport = function () {
  const modesOfTransport = [];
  this.journeys.forEach((journey) => {
  modesOfTransport.push(journey.transport);
  })
  return modesOfTransport;
};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;