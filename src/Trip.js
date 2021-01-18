class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destination = destinationData;
    this.travelerCount = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    //or pending?
    this.activities = tripData.suggestedActivities;
    this.tripStartDate;
    this.tripEndDate;
    this.tripCost;
  }

  estimatedTripCost() {
    const totalLodging = this.destination.estimatedLodgingCostPerDay * this.duration;
    const totalFlight = this.destination.estimatedFlightCostPerPerson * this.travelerCount;
    const tripCost = totalLodging + totalFlight;
    const costWithAgentFee = tripCost + (tripCost * .10);
    this.tripCost = costWithAgentFee;
    return costWithAgentFee;
  }

  findTripDuration() {
    let tripStart = new Date(this.date);
    let tripEnd = new Date(this.date).setDate(new Date(this.date).getDate() + this.duration);
    this.tripStartDate = tripStart.getTime();
    this.tripEndDate = tripEnd;
  }
}
export default Trip;