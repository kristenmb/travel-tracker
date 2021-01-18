const domUpdates = {
  displayTrips(currentUser, displayType) {
    const tripCards = document.querySelector('.card-container');
    tripCards.innerHTML = '';
    let tripInfo = '';
    if (currentUser[displayType].length > 0) {

      currentUser[displayType].forEach(trip => {
        tripInfo += `
        <article class="trip-cards">
        <p>${displayType}</p> <br>
        <p>Date: ${trip.date}</p> <br>
        <p>Duration: ${trip.duration}</p> <br>
        <p>Status: ${trip.status}</p> <br>
        <p>Activities: ${trip.suggestedActivities}</p>
        </article>
        `;
      })
    } else {
      tripInfo = `
        <p class="no-trips">You do not have any ${displayType} trips :( <br>
        Plan one above!</p>`
    }
    
    tripCards.insertAdjacentHTML('beforeend', tripInfo)
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
    message.classList.add('hidden');
  }
}


// fullDate.toDateString();

export default domUpdates;