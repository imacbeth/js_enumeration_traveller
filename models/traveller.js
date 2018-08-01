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
  const journeysByTransport = this.journeys.filter(journey => journey.transport === transport);
  return journeysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysByDistance = this.journeys.filter(journey => journey.distance > minDistance);
  return journeysByDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = (total, journey) => total + journey.distance;
  return this.journeys.reduce(totalDistance, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
