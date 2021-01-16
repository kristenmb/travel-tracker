class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destination = destinationData;
    //an object of destination info from api
    //  {
    //         "id": 1,
    //         "destination": "Lima, Peru",
    //         "estimatedLodgingCostPerDay": 70,
    //         "estimatedFlightCostPerPerson": 400,
    //         "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
    //         "alt": "overview of city buildings with a clear sky"
    //     },
    this.travelerCount = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    //or pending?
    this.activities = tripData.suggestedActivities;
    this.tripStartDate;
    this.tripEndDate;
  }

  estimatedTripCost() {
    const totalLodging = this.destination.costPerDay * this.duration;
    const totalFlight = this.destination.costPerFlight * this.travelerCount;
    const tripCost = ((totalLodging + totalFlight) * .10).toFixed(2);
    return tripCost;
  }

  findTripDuration() {
    let tripStart = new Date(this.date);
    let tripEnd = tripStart.setDate(tripStart.getDate() + this.duration);
    this.tripStartDate = tripStart.getTime();
    this.tripEndDate = tripEnd;
  }
}
export default Trip;