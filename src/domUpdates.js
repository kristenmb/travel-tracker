
const domUpdates = {
  displayUserName(currentUser) {
    const welcomeMessage = document.querySelector('.greeting');
    const fullName = currentUser.name.split(' ');
    const name = fullName[0]
    welcomeMessage.innerText = `Welcome, ${name}`
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
        <h4 class="destination-name">${trip.destination.destination}</h4>
        <p>Trip date: ${formattedDate} <br>
        Travelers: ${trip.travelerCount} <br>
        Duration: ${trip.duration} <br>
        Status: ${trip.status} <br> </p>
        <a disabled href="">Request activities from your travel agent!</a>
        </article>
        `;
      })
    } else {
      tripInfo = `
        <h3 class="no-trips">You do not have any ${displayType} trips :( <br>
        Plan one above!</h3>`
    }
  
    tripCards.insertAdjacentHTML('beforeend', tripInfo)
  },

  displayTripSection(displayType) {
    const displayTripSection = document.querySelector('#trip-type-section');
    if (displayType === 'present') {
      displayType = 'current'
    }
    displayTripSection.innerHTML = `${displayType.toUpperCase()} TRIPS`;
  },

  formatDate(date) {
    let fullDate = new Date(date).toDateString();
    return fullDate;
  },

  displaySpending(cost) {
    const annualSpending = document.querySelector('#spending');
    annualSpending.innerText = `Total spent this year: $${cost}`
  },

  createBookingSection(today, allDestinations) {
    //sort alphabetically?
    const dropDown = document.querySelector('#destination-drop');
    let destinations = '';
    allDestinations.forEach((destination, i) => {
        destinations += `<option value="${destination.id}">${destination.destination}</option>`
    })
    dropDown.insertAdjacentHTML('beforeend', destinations)
  },

  changeBookTripButton(button) {
    // const estimatedCostButton = document.querySelector('.book-btn');
    if (button.classList.contains('book')) {
      button.innerText = 'Book It!'
    } else {
      button.innerText = 'Calculate Estimated Cost'
    }
  },
  
  resetBookingArea(start, duration, numTravelers, destination, button, message) {
    start.value = '';
    duration.value = '';
    numTravelers.value = '';
    destination.value = 0;
    button.classList.remove('book');
    message.innerText = 'Please select appropriate inputs!'
    message.classList.add('hidden');
  }
}


// fullDate.toDateString();

export default domUpdates;