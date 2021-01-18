import domUpdates from './domUpdates.js';
import Trip from './Trip.js'
// import domUpdates from './domUpdates.js'

const apiCalls = {
  getAllTravelers() {
    return fetch('http://localhost:3001/api/v1/travelers')
      .then(response => response.json())
      .then(allTravelers => {
        return allTravelers.travelers
      })
      .catch(err => {
        console.log(err);
        alert('Oops, all travelers failed to load.');
      })
  },
  
  getAllTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
      .then(response => response.json())
      .then(allTrips => allTrips.trips)
      .catch(err => {
        console.log(err);
        alert('Oops, all trips failed to load.');
      })
  },
  
  getAllDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
      .then(response => response.json())
      .then(allDestinations => allDestinations.destinations)
      .catch(err => {
        console.log(err);
        alert('Oops, all destinations failed to load.');
      })
  },
  
  fetchAllData() {
    return Promise.all([apiCalls.getAllTravelers(), apiCalls.getAllTrips(), apiCalls.getAllDestinations()])
      .then(values => {
        return values;
      })
      .catch(err => {
        console.log(err);
      })   
  },

  postNewTrip(newestTrip, currentTraveler, allDestinations) {
    return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newestTrip), 
    })
      .then(response => response.json())
      .then(data => {
        console.log(data, 'DATA')
        console.log(data.newTrip, 'NEW RESOURCE')

        let requestedTrip = data.newTrip;
        let tripDestination = allDestinations.find(destination => {
          return destination.id === requestedTrip.destinationID;
        })
        requestedTrip = new Trip(requestedTrip, tripDestination)
        currentTraveler.sortAllTrips();
      })
      .catch(err => {
        console.log(err)
      });
  },

  // deleteTrip(id) {
  //   return fetch(`http://localhost:3001/api/v1/trips/${id}`, {
  //     method: 'DELETE',
  //   })
  //   .then(response => response.json())
  //   .then(info => console.log(info))
  // }
}

export default apiCalls;