import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler.js'
import Trip from '../src/Trip.js';
import travelerData from './test-data/traveler-test-data.js';
import tripData from './test-data/trip-test-data.js';
import destinationData from './test-data/destination-test-data.js'

describe('Traveler', () => {
  let trip;
  let trip2;
 
  beforeEach((done) => {
    trip = new Trip(tripData[0], destinationData[6]);
    trip2 = new Trip(tripData[3], destinationData[0]);
    done();
  })

  it('should instantiate a new Trip', () => {
    expect(trip).to.be.an.instanceof(Trip);
    expect(trip2).to.be.an.instanceof(Trip);
  })

  it('should have a trip id, userID, travelerCount, trip date, duration, status and suggested activities', () => {
    expect(trip.id).to.equal(1);
    expect(trip.userID).to.equal(38);
    expect(trip.travelerCount).to.equal(1);
    expect(trip.date).to.equal('2019/09/16');
    expect(trip.duration).to.equal(8);
    expect(trip.status).to.equal('approved');
    expect(trip.activities).to.deep.equal([]);

    expect(trip2.id).to.equal(4);
    expect(trip2.userID).to.equal(38);
    expect(trip2.travelerCount).to.equal(2);
    expect(trip2.date).to.equal('2020/02/25');
    expect(trip2.duration).to.equal(10);
    expect(trip2.status).to.equal('approved');
    expect(trip2.activities).to.deep.equal([]);
  })

  it('should hold a corresponding destination object', () => {
    expect(trip.destination).to.deep.equal({
      id: 49,
      destination: 'Miami, Florida',
      estimatedLodgingCostPerDay: 158,
      estimatedFlightCostPerPerson: 275,
      image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1573&q=80',
      alt: 'sand with palm trees and tall buildings in the background'
    });

    expect(trip2.destination).to.deep.equal({
      id: 14,
      destination: 'Marrakesh, Morocco',
      estimatedLodgingCostPerDay: 70,
      estimatedFlightCostPerPerson: 830,
      image: 'https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
      alt: 'people buying oranges and other fruit from a street vendor'
    }); 
  })

  it('should be able to calculate the estimated trip cost', () => {
    trip.estimatedTripCost();
    expect(trip.tripCost).to.equal(1692.9)

    trip2.estimatedTripCost();
    expect(trip2.tripCost).to.equal(2596)    
  })

  it('should be able to find the trips end and start date', () => {
    trip.findTripDuration();
    expect(trip.tripStartDate).to.equal(1568613600000);
    expect(trip.tripEndDate).to.equal(1569304800000);

    trip2.findTripDuration();
    expect(trip2.tripStartDate).to.equal(1582614000000);
    expect(trip2.tripEndDate).to.equal(1583478000000);

  })
})