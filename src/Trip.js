class Trip {
  constructor(tripData, destinationsData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destination = destinationsData;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    //or pending?
    this.activities = tripData.suggestedActivities;
  }

  estimatedTripCost() {
    //daily cost of destination * duration
    //flight cost * travelers
    // * 10%
  }
}


//this.date --> maybe want to date = this.date.split('/') and display as date[1], date[2], date[0]
export default Trip;