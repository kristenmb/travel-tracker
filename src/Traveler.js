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
    this.sortPastTrips();
    this.sortPendingTrips();
    this.sortUpcomingTrips();
  }

  sortPresentTrips() {
    // console.log(this.allTrips, 'ALL TRIPS')
    this.allTrips.forEach(trip => {
      trip.findTripDuration();
      let tripEnd = trip.tripEndDate;
      // console.log(tripEnd, 'trip end')
      let tripStart = trip.tripStartDate;
      // console.log(tripStart, 'tripstart')
      let today = new Date(this.todaysDate).getTime();
      // console.log(today, 'butts')
      // console.log(tripStart, 'start butts')
      // console.log(tripEnd, 'end butts')
      // console.log(tripStart <= today && today <= tripEnd)
      // console.log(new Date(this.todaysDate).getTime(), 'today')
      if (tripStart <= today && today <= tripEnd) {
        // console.log('in here')
        this.present.push(trip);
      }
    })
  }

  sortUpcomingTrips() {
    this.allTrips.forEach(trip => {
      trip.findTripDuration();
      let tripStart = trip.tripStartDate;
      // console.log(tripStart)
      // console.log(this.todaysDate < tripStart )
      // let tripEnd = trip.tripEndDate;
      let today = new Date(this.todaysDate).getTime();
      // console.log(today, 'butts')
      // console.log(tripStart, 'start butts')
      // console.log(today > tripStart)
      if (today < tripStart) {
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
      trip.findTripDuration();
      // let today = new Date(this.todaysDate).getTime()
      // console.log(today, 'today')
      let yearStart = new Date(this.todaysDate).setDate(new Date(this.todaysDate).getDate() - 365)
      // console.log(yearStart)
      // console.log(trip.tripStartDate)
      if (trip.tripStartDate > yearStart) {
        return trip;
      };
    });
    const annual = pastYearTrips.reduce((annualSpent, trip) => {
      trip.estimatedTripCost();
      annualSpent += trip.tripCost;
      return annualSpent;
    }, 0)
  
    return annual;
  }
}

export default Traveler;
