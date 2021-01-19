import domUpdates from './domUpdates.js';
import Trip from './Trip.js'

const apiCalls = {
  getAllTravelers() {
    return fetch('http://localhost:3001/api/v1/travelers')
      .then(response => {
        if (!response.ok) {
          domUpdates.displayFetchErrorHandling('We\'re having trouble with our site, please check back later!', '.login-error')
        }
        return response.json();
      })
      .then(allTravelers => {
        return allTravelers.travelers
      })
      .catch(err => console.log(err))
  },
  
  getAllTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
      .then(response => {
        if (!response.ok) {
          domUpdates.displayFetchErrorHandling('We\'re having trouble with our site, please check back later!', '.login-error')
        }
        return response.json();
      })
      .then(allTrips => allTrips.trips)
      .catch(err => console.log(err))
  },
  
  getAllDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
      .then(response => {
        if (!response.ok) {
          domUpdates.displayFetchErrorHandling('We\'re having trouble with our site, please check back later!', '.login-error')
        }
        return response.json();
      })
      .then(allDestinations => allDestinations.destinations)
      .catch(err => console.log(err))
  },
  
  fetchAllData() {
    return Promise.all([apiCalls.getAllTravelers(), apiCalls.getAllTrips(), apiCalls.getAllDestinations()])
      .then(values => {
        return values;
      })
      .catch(err => console.log(err))   
  },

  postNewTrip(newestTrip, currentTraveler, allDestinations) {
    return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newestTrip), 
    })
      .then(response => {
        if (!response.ok) {
          domUpdates.displayFetchErrorHandling('We\'re having trouble reaching the server, please contact your agent to book!', '.selection-err')
        }
        return response.json();
      })
      .then(data => {
        let requestedTrip = data.newTrip;
        let tripDestination = allDestinations.find(destination => {
          return destination.id === requestedTrip.destinationID;
        });
        requestedTrip = new Trip(requestedTrip, tripDestination);
        currentTraveler.sortAllTrips();
      })
      .catch(err => console.log(err));
  }
}

export default apiCalls;