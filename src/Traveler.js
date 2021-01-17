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
    this.todaysDate = today.getTime();
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

  sortAllTrips() {
    this.sortPresentTrips();
    this.sortUpcomingTrips();
    this.sortPastTrips();
    this.sortPendingTrips();
  }

  sortPresentTrips() {
    this.allTrips.forEach(trip => {
      trip.findTripDuration();
      let tripEnd = trip.tripEndDate;
      let tripStart = trip.tripStartDate;
      if (tripStart < this.todaysDate && this.todaysDate < tripEnd) {
        console.log('in here')
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

  sortPendingTrips() {
    let pendingTrips = this.allTrips.filter(trip => trip.status === 'pending');
    pendingTrips.forEach(trip => {
      this.pending.push(trip);
    })
  }

  calculateMoneySpentThisYear() {
    let pastYearTrips = this.allTrips.filter(trip => {

      let yearStart = this.todaysDate.setDate(this.todaysDate.getDate() - 365)
      if (trip.tripStartDate > yearStart) {
        return trip;
      };
    });
    return pastYearTrips.reduce((annualSpent, trip) => {
      trip.estimatedTripCost();
      annualSpent += trip.tripCost;
      return annualSpent;
    }, 0)
  }
}

export default Traveler;
