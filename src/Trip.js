class Trip {
  constructor(tripData, destinationsData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    // this.destination = destinationsData.id;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    //or pending?
    this.activities = tripData.suggestedActivities;
  }
}


//this.date --> maybe want to date = this.date.split('/') and display as date[1], date[2], date[0]
export default Trip;