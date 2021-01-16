class Traveler {
  constructor(travelerData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
    this.allTrips = [];
    this.upcoming = [];
    this.present = [];
    this.past = [];
    this.pending = [];
  }

  createAllTrips() {

    //sort all trip data to filter out only the trips with matching userID
    //add destination info
    //instantiate Trips and push into allTrips array
  }

  sortPresentTrips() {
    // filter trips for any occurring today and push to this.present
  }

  sortUpcomingTrips() {
    //filter all upcoming trips and push to this.upcoming
  }

  sortPastTrips() { 
    //filter all past trips and push to this.past
  }

  calculateMoneySpentThisYear() {
    //for each trip annualMoney += ((duration * cost per day) + (number of travelers * flightscost) * 10%)
  }
}

export default Traveler;
