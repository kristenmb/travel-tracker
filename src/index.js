import './css/base.scss';

import './images/turing-logo.png';

import Traveler from './Traveler.js';
import Trip from './Trip.js';
import Destination from './Destination.js';
import domUpdates from './domUpdates.js';
import apiCalls from './apiCalls.js'

let allTravelers;
let allTrips;
let allDestinations;
let currentTraveler;
let today;

window.addEventListener('load', () => {
  apiCalls.fetchAllData()
    .then(allData => {
      allTravelers = allData[0];
      allTrips = allData[1];
      allDestinations = allData[2];
      getTodaysDate();
      createUser();
      createTrip();
      createDestination();
      currentTraveler.createAllTrips(allTrips, allDestinations);
      currentTraveler.sortPresentTrips();
      domUpdates.displayTrips(currentTraveler)
    })
})

function createUser() {
  currentTraveler = new Traveler(allTravelers[0], today)
  // console.log(currentTraveler);
}

function createTrip() {
  let aTrip = new Trip(allTrips[7]);
  console.log(aTrip)
}

function createDestination() {
  let destination = new Destination(allDestinations[38])
  console.log(destination);
}

function getTodaysDate() {
  let fullDate = new Date();
  today = fullDate.getTime();
  // fullDate.toDateString();
}


// set start month and end month
// set start DAY and end DAY
// if year matches && startmonth <= tripstartmonth <= endmonth && startday <= today <= endDay
//  then push to present trips array