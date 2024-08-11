const ParkingSpot = require("./ParkingSpot");
const Ticket = require("./Ticket");

class Parking {
  constructor(parkingSize) {
    this.parkingSize = parkingSize;
    this.spots = [];

    for (let i = 0; i < parkingSize; i++) {
      this.spots.push(new ParkingSpot(i));
    }

    // [
    //    ParkingSpot { spotId: 0, available: true }
    //    ParkingSpot { spotId: 1, available: true }
    //    .........
    // ]
    console.log(this.spots);
  }

  park(vehicle) {
    const vehicleId = vehicle.vehicleId;

    for (let i = 0; i < this.parkingSize; i++) {
      const spot = this.spots[i];

      if (spot.isAvailable()) {
        const entryTime = new Date().valueOf();
        this.ticket = new Ticket(vehicleId, entryTime);

        spot.occupy(vehicleId);
        console.log(`Vehicle Id ${vehicleId} parked in spot ${spot.spotId}`);
        console.log('ticket: ', this.ticket);
        return;
      }
    }

    throw new Error("The parking garage is full!");
  }

  exit(vehicle, spotId) {
    const spot = this.spots[spotId];
    const vehicleId = vehicle.vehicleId;

    console.log(spot);
    if (!spot) {
      throw new Error(`Can not find spot id ${spotId}`);
    }

    if (spot.isAvailable()) {
      throw new Error(`Spot id ${spotId} is not occupied`);
    }

    spot.vacate();
    this.ticket.calculatePayment(new Date().valueOf());

    console.log(`Vehicle Id: ${vehicleId} at spot Id ${spotId} exited the garage!`);
  }

  availableSpots() {
    let count = 0;
    for (const spot of this.spots) {
      if (spot.isAvailable()) {
        count++;
      }
    }
    return count;
  }

  occupiedSpots() {
    return this.parkingSize - this.availableSpots();
  }
}

module.exports = Parking;
