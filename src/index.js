import './css/base.scss';

import './images/travel.png';

import Traveler from './Traveler.js';
import Trip from './Trip.js';
import domUpdates from './domUpdates.js';
import apiCalls from './apiCalls.js'

let allTravelers, allTrips, allDestinations, currentTraveler, today;

const tripButtons = document.querySelectorAll('.trip-btns');
const loginButton = document.querySelector('.submit');
const logoutButton = document.querySelector('.logout');
const bookingButton = document.querySelector('.book-btn');
const startDateInput = document.querySelector('#start');
const durationInput = document.querySelector('.trip-duration');
const numTravelersInput = document.querySelector('.num-travelers');
const destinationInput = document.querySelector('.drop');

window.addEventListener('load', fetchAllInfo)
loginButton.addEventListener('click', checkCredentials);
bookingButton.addEventListener('click', handleBookings);
logoutButton.addEventListener('click', domUpdates.switchSectionDisplay)
tripButtons.forEach(button => button.addEventListener('click', displayTrips))

function checkCredentials() {
  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  const loginErrorMessage = document.querySelector('.login-error');
  let user = parseInt(usernameInput.value.slice(8));
  let userID = user - 1;
  fetchAllInfo();
  if (passwordInput.value !== 'travel2020' || usernameInput.value.length < 8 || !usernameInput.value.includes('traveler') || checkValidUser(user) === null) {
    loginErrorMessage.classList.remove('hidden');
  } else {
    loginErrorMessage.classList.add('hidden');
    createUser(userID);
    displayUser();
    domUpdates.clearLoginInputs(usernameInput, passwordInput);
    domUpdates.switchSectionDisplay();
  }
}

function checkValidUser(newUser) {
  const travelerID = allTravelers.find(traveler => traveler.id === newUser);
  if (travelerID === undefined) {
    return null;
  } else {
    return true;
  }
}

function fetchAllInfo() {
  apiCalls.fetchAllData()
    .then(allData => {
      allTravelers = allData[0];
      allTrips = allData[1];
      allDestinations = allData[2];
      getTodaysDate();
    })
}

function createUser(id) {
  currentTraveler = new Traveler(allTravelers[id], today);
  currentTraveler.createAllTrips(allTrips, allDestinations);
  currentTraveler.sortAllTrips();
}

function displayUser() {
  domUpdates.displayUserName(currentTraveler);
  domUpdates.displayTrips(currentTraveler, 'upcoming');
  domUpdates.createBookingSection(today, allDestinations);
  domUpdates.displaySpending(currentTraveler.calculateMoneySpentThisYear());
}

function getTodaysDate() {
  today = new Date();
}

function displayTrips(event) {
  domUpdates.displayTrips(currentTraveler, event.target.id);
  domUpdates.displayTripSection(event.target.id)
}

function handleBookings(event) {
  const selectionError = document.querySelector('.selection-err');
  if (startDateInput.value === '' || durationInput === '' || numTravelersInput === '' || destinationInput.value <= 0) {
    selectionError.classList.remove('hidden')
  } else if (!event.target.classList.contains('book')) {
    const cost = estimateNewTripCost();
    domUpdates.displayTripCost(selectionError, bookingButton, cost);
    domUpdates.changeBookTripButton(bookingButton);
  } else {
    sendBookingRequest();
    domUpdates.resetBookingArea(startDateInput, durationInput, numTravelersInput, destinationInput, bookingButton, selectionError);
    domUpdates.changeBookTripButton(bookingButton);
  }
}

function estimateNewTripCost() {
  let trip = collectBookingData();
  let myDestination = allDestinations.find(destination => {
    return destination.id === trip.destinationID;
  });
  let pendingTrip = new Trip (trip, myDestination);
  return pendingTrip.estimatedTripCost();
}

function sendBookingRequest() {
  const newTrip = collectBookingData();
  apiCalls.postNewTrip(newTrip, currentTraveler, allDestinations)
    .then(res => {
      fetchAllInfo();
      allTrips.push(newTrip);
      createUser(currentTraveler.id - 1);
      displayUser();
    });
  domUpdates.displayTripSection('upcoming');
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