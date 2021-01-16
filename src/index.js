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

window.addEventListener('load', () => {
  apiCalls.fetchAllData()
    .then(allData => {
      allTravelers = allData[0];
      allTrips = allData[1];
      allDestinations = allData[2];
      createUser();
      createTrip();
      createDestination();
      domUpdates.displayTrips(currentTraveler, allTrips)
    })
})

function createUser() {
  currentTraveler = new Traveler(allTravelers[0])
  // console.log(currentTraveler);
}

function createTrip() {
  let aTrip = new Trip(allTrips[0]);
  console.log(aTrip)
}

function createDestination() {
  let destination = new Destination(allDestinations[0])
  console.log(destination);
}