import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler.js'
import Trip from '../src/Trip.js';
import travelerData from './test-data/traveler-test-data.js';
import tripData from './test-data/trip-test-data.js';
import destinationData from './test-data/destination-test-data.js'

describe('Traveler', () => {
  let traveler;
  let traveler2;

  let today = new Date()
 
  beforeEach((done) => {
    traveler = new Traveler(travelerData[0], today);
    traveler2 = new Traveler(travelerData[1], today);
    done();
  })

  it('should be an instantiation of Traveler', () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
    expect(traveler2).to.be.an.instanceOf(Traveler);
  });

  it('should have an id, name, and traveler type', () => {
    expect(traveler.id).to.equal(1);
    expect(traveler.name).to.equal('Ham Leadbeater');
    expect(traveler.type).to.equal('relaxer');
  
    expect(traveler2.id).to.equal(38);
    expect(traveler2.name).to.equal('Lazar Leamy');
    expect(traveler2.type).to.equal('thrill-seeker');
  });

  it('should be able to create a list of instantiations of the users trips', () => {
    traveler.createAllTrips(tripData, destinationData);
    expect(traveler.allTrips[0]).to.be.an.instanceOf(Trip);
    expect(traveler.allTrips.length).to.equal(3)
    expect(traveler.allTrips[0]).to.deep.equal({
      id: 3,
      userID: 1,
      destination: {
        id: 22,
        destination: 'Manila, Philippines',
        estimatedLodgingCostPerDay: 40,
        estimatedFlightCostPerPerson: 900,
        image: 'https://images.unsplash.com/photo-1555557356-51c5d7a8f4c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        alt: 'colorful buildings near the water with docked boats'
      },
      travelerCount: 4,
      date: '2021/05/22',
      duration: 17,
      status: 'pending',
      activities: []
    })
  })

  it('should be able to sort out present trips', () => {

  })

  it('should be able to sort upcoming trips', () => {

  })

  it('should be able to sort past trips', () => {

  })

  it('should be able to sort pending trips', () => {
    
  })

  it('should be able to sort all trips appropriately', () => {

  })

  it('should be ab le to calculate amount of money spend in last 365 days', () => {

  })
});
