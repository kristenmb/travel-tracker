import './css/base.scss';

import './images/turing-logo.png';

import Traveler from './Traveler.js';
import Trip from './Trip.js';
import domUpdates from './domUpdates.js';
import apiCalls from './apiCalls.js'

window.addEventListener('load', () => {
  apiCalls.getAllTravelers().then(travelers => console.log(travelers))
})