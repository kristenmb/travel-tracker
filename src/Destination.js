class Destination {
  constructor(allDestinations) {
    this.id = allDestinations.id;
    this.location = allDestinations.destination;
    this.costPerDay = allDestinations.estimatedLodgingCostPerDay;
    this.costPerFlight = allDestinations.estimatedFlightCostPerPerson;
    this.image = allDestinations.image;
    this.altText = allDestinations.alt;
  }
}

export default Destination;