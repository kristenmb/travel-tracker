const domUpdates = {
  switchSectionDisplay() {
    const loginPage = document.querySelector('.login-page');
    const travelerDash = document.querySelector('.traveler-view');
    loginPage.classList.toggle('hidden');
    travelerDash.classList.toggle('hidden');
  },

  clearLoginInputs(username, password) {
    username.value = '';
    password.value = '';
  },

  displayUserName(currentUser) {
    const welcomeMessage = document.querySelector('.greeting');
    const fullName = currentUser.name.split(' ');
    const name = fullName[0];
    welcomeMessage.innerText = `Welcome, ${name}`;
  },

  displayTrips(currentUser, displayType) {
    const tripCards = document.querySelector('.card-container');
    tripCards.innerHTML = '';
    let tripInfo = '';
    if (currentUser[displayType].length > 0) {
      currentUser[displayType].forEach(trip => {
        const formattedDate = this.formatDate(trip.date);
        tripInfo += `
        <article class="trip-cards">
        <div class="img-wrap">
        <img class="trip-img" src=${trip.destination.image} alt=${trip.destination.alt}>
        </div>
        <h3 class="destination-name">${trip.destination.destination}</h3>
        <p>Trip date: ${formattedDate} <br>
        Travelers: ${trip.travelerCount} <br>
        Duration: ${trip.duration} <br>
        Status: ${trip.status} <br> </p>
        <a>Request activities from your travel agent!</a>
        </article>
        `;
      })
    } else {
      tripInfo = `
        <h3 class="no-trips">You do not have any ${displayType} trips :( <br>
        Plan one above!</h3>`;
    }
  
    tripCards.insertAdjacentHTML('beforeend', tripInfo);
  },

  displayTripSection(displayType) {
    const displayTripSection = document.querySelector('#trip-type-section');
    if (displayType === 'present') {
      displayType = 'current';
    }
    displayTripSection.innerHTML = `${displayType.toUpperCase()} TRIPS`;
  },

  formatDate(date) {
    let fullDate = new Date(date).toDateString();
    return fullDate;
  },

  displaySpending(cost) {
    const annualSpending = document.querySelector('#spending');
    annualSpending.innerText = `Total spent this year: $${cost}`;
  },

  createBookingSection(today, allDestinations) {
    const dropDown = document.querySelector('#destination-drop');
    allDestinations.sort((a, b) => {
      let destinationA = a.destination;
      let destinationB = b.destination;
      if (destinationA < destinationB) {
        return -1;
      } else if (destinationA > destinationB) {
        return 1;
      } else {
        return 0;
      }
    });

    let destinations = '';
    allDestinations.forEach((destination) => {
      destinations += `<option value="${destination.id}">${destination.destination}</option>`;
    });

    dropDown.insertAdjacentHTML('beforeend', destinations);
  },

  displayTripCost(message, button, cost) {
    message.classList.remove('hidden');
    message.innerText = `This trip will cost $${cost}`;
    button.classList.add('book');
  },

  changeBookTripButton(button) {
    if (button.classList.contains('book')) {
      button.innerText = 'Book It!';
    } else {
      button.innerText = 'Calculate Estimated Cost';
    }
  },
  
  resetBookingArea(start, duration, numTravelers, destination, button, message) {
    start.value = '';
    duration.value = '';
    numTravelers.value = '';
    destination.value = 0;
    button.classList.remove('book');
    message.innerText = 'Please select appropriate inputs!';
    message.classList.add('hidden');
  },

  displayFetchErrorHandling(message, selector) {
    let error = document.querySelector(selector);
    error.classList.remove('hidden');
    error.innerText = message;
  }
}

export default domUpdates;