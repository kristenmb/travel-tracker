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
      domUpdates.displayTrips(currentTraveler, 'upcoming');
      domUpdates.createBookingSection(today, allDestinations);
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

function displayTrips(event) {
  domUpdates.displayTrips(currentTraveler, event.target.id)
}

const bookingButton = document.querySelector('.book-btn');
const startDateInput = document.querySelector('#start');
const durationInput = document.querySelector('.trip-duration');
const numTravelersInput = document.querySelector('.num-travelers');
const destinationInput = document.querySelector('.drop');
const selectionError = document.querySelector('.selection-err');

bookingButton.addEventListener('click', (event) => {
  if (startDateInput.value === '' || durationInput === '' || numTravelersInput === '' || destinationInput.value === ' ') {
    //fix conditional so if date is selected still can't fire button
    selectionError.classList.remove('hidden')
  } else if (!event.target.classList.contains('book')) {
    selectionError.innerText = `This trip will cost $$`
    bookingButton.classList.toggle('book');
    domUpdates.changeBookTripButton();
  } else {
    bookingButton.classList.toggle('book');
    domUpdates.changeBookTripButton();
    domUpdates.resetBookingArea(startDateInput, durationInput, numTravelersInput, destinationInput);
    // const value = parseInt(durationInput.value)
    //post it!
  }

})

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