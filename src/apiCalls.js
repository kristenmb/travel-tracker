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
        alert('Page failed to load, please try again later.')
      })   
  }
}

export default apiCalls;