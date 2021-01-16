import Trip from './Trip.js';

class Traveler {
  constructor(travelerData, today) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
    this.allTrips = [];
    this.upcoming = [];
    this.present = [];
    this.past = [];
    this.pending = [];
    this.todaysDate = today;
  }

  createAllTrips(allTrips, allDestinations) {
    let filteredTrips = allTrips.filter(trip => trip.userID === this.id);
    let currentDestination;
    filteredTrips.forEach(trip => {
      allDestinations.forEach(location => {
        if (trip.destinationID === location.id) {
          currentDestination = location;
          this.allTrips.push(new Trip(trip, currentDestination));
        }
      })
    })
    return this.allTrips
  }

  sortPresentTrips() {
    this.allTrips.forEach(trip => {
      trip.findTripDuration();
      let tripEnd = trip.tripEndDate;
      if (this.todaysDate < tripEnd) {
        this.present.push(trip);
      }
    })
  }

  sortUpcomingTrips() {
    this.allTrips.forEach(trip => {
      trip.findTripDuration();
      let tripStart = trip.tripStartDate;
      if (this.todaysDate < tripStart) {
        this.upcoming.push(trip)
      }
    })
  }

  sortPastTrips() { 
    this.allTrips.forEach(trip => {
      trip.findTripDuration();
      let tripEnd = trip.tripEndDate;
      if (tripEnd < this.todaysDate) {
        this.past.push(trip)
      }
    })
  }

  calculateMoneySpentThisYear() {
    //for each trip annualMoney += ((duration * cost per day) + (number of travelers * flightscost) * 10%)
  }
}

export default Traveler;
