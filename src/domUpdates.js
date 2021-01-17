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

  displayTripsOnClick() {
    // if (event.target.id === "upcoming") {
    //   this.displayTrips(c)
    // }
  }
}


// fullDate.toDateString();

export default domUpdates;