const domUpdates = {
  displayTrips(currentUser, allTrips) {
    const tripCards = document.querySelector('.card-container');
    let tripInfo = '';
    console.log(currentUser)
    allTrips.forEach(trip => {
      tripInfo += `
      <article class="trip-cards">
      <p>Date: ${trip.date}</p> <br>
      <p>Duration: ${trip.duration}</p> <br>
      <p>Status: ${trip.status}</p> <br>
      <p>Activities: ${trip.suggestedActivities}</p>
      </article>

      `;
    })
    tripCards.insertAdjacentHTML('beforeend', tripInfo)
  }
}

export default domUpdates;