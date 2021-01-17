import './css/base.scss';

import './images/turing-logo.png';

import Traveler from './Traveler.js';
import Trip from './Trip.js';
import domUpdates from './domUpdates.js';
import apiCalls from './apiCalls.js'

let allTravelers;
let allTrips;
let allDestinations;
let currentTraveler;
let today;
const tripButtons = document.querySelectorAll('.trip-btns');

tripButtons.forEach(button => button.addEventListener('click', displayTrips))
window.addEventListener('load', () => {
  apiCalls.fetchAllData()
    .then(allData => {
      allTravelers = allData[0];
      allTrips = allData[1];
      allDestinations = allData[2];
      getTodaysDate();
      createUser();
      currentTraveler.createAllTrips(allTrips, allDestinations);
      currentTraveler.sortAllTrips();
      domUpdates.displayTrips(currentTraveler, 'upcoming')
      console.log(currentTraveler.todaysDate)
      console.log(currentTraveler.past, 'PAST')
      console.log(currentTraveler.present, 'PRESENT')
      console.log(currentTraveler.upcoming, 'UPCOMING')
      console.log(currentTraveler.pending, 'PENDING')
      // console.log(currentTraveler.calculateMoneySpentThisYear(), 'LOOK')
      domUpdates.displaySpending(currentTraveler.calculateMoneySpentThisYear())
    })
})

function createUser() {
  currentTraveler = new Traveler(allTravelers[0], today)
  // console.log(currentTraveler);
}

function getTodaysDate() {
  today = new Date()
}
// function createTrip() {
//   let aTrip = new Trip(allTrips[7], createDestination());
//   console.log(aTrip)
//   aTrip.estimatedTripCost();
// }

// function createDestination() {
//   let destination;
//   allDestinations.forEach(location => {
//     destination = new Destination(location);

//   })
//   return destination;
// }
function displayTrips(event) {
  domUpdates.displayTrips(currentTraveler, event.target.id)
}