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
window.addEventListener('load', fetchAllInfo)

function fetchAllInfo() {
  apiCalls.fetchAllData()
    .then(allData => {
      allTravelers = allData[0];
      allTrips = allData[1];
      allDestinations = allData[2];
      getTodaysDate();
      createUser();
      domUpdates.displayUserName(currentTraveler);
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
}

function createUser() {
  currentTraveler = new Traveler(allTravelers[35], today)
  // console.log(currentTraveler);
}

function getTodaysDate() {
  today = new Date()
}

function displayTrips(event) {
  domUpdates.displayTrips(currentTraveler, event.target.id);
  // apiCalls.deleteTrip(201);
}

const bookingButton = document.querySelector('.book-btn');
const startDateInput = document.querySelector('#start');
const durationInput = document.querySelector('.trip-duration');
const numTravelersInput = document.querySelector('.num-travelers');
const destinationInput = document.querySelector('.drop');
const selectionError = document.querySelector('.selection-err');

bookingButton.addEventListener('click', handleBookings);

function handleBookings(event) {
  if (startDateInput.value === '' || durationInput === '' || numTravelersInput === '' || destinationInput.value <= 0) {
    selectionError.classList.remove('hidden')
  } else if (!event.target.classList.contains('book')) {
    selectionError.classList.remove('hidden')
    selectionError.innerText = `This trip will cost $${estimateNewTripCost()}`
    bookingButton.classList.add('book');
    domUpdates.changeBookTripButton(bookingButton);
  } else {
    sendBookingRequest();
    domUpdates.resetBookingArea(startDateInput, durationInput, numTravelersInput, destinationInput, bookingButton, selectionError);
    domUpdates.changeBookTripButton(bookingButton);
    // const value = parseInt(durationInput.value)
    //post it!
  }
}

function estimateNewTripCost() {
  let trip = collectBookingData();
  let myDestination = allDestinations.find(destination => {
    return destination.id === trip.destinationID;
  })
  let pendingTrip = new Trip (trip, myDestination);
  return pendingTrip.estimatedTripCost();
}

function sendBookingRequest() {
  const newTrip = collectBookingData();
  apiCalls.postNewTrip(newTrip, currentTraveler, allDestinations)
    .then(res => {
      fetchAllInfo()
    });
}

function collectBookingData() {
  let duration = parseInt(durationInput.value);
  let travelers = parseInt(numTravelersInput.value);
  let destinationID = parseInt(destinationInput.value);
  return {
    id: getID(),
    userID: currentTraveler.id,
    destinationID,
    travelers,
    date: formatDateInput(),
    duration,
    status: 'pending',
    suggestedActivities: []
  }
}

function formatDateInput() {
  let date = startDateInput.value;
  const splitDate = date.split('-')
  return `${splitDate[0]}/${splitDate[1]}/${splitDate[2]}`
}

function getID() {
  const tripIDs = allTrips.filter(trip => {
    return trip.id;
  })
  tripIDs.sort((a, b) => {
    return b.id - a.id;
  })
  return tripIDs[0].id + 1;
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