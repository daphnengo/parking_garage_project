class ParkingSpot {
  constructor(spotId) {
    this.spotId = spotId;
    this.available = true;
    this.vehicleId = '';
  }

  isAvailable() {
    return this.available;
  }

  occupy(vehicleId) {
    this.available = false;
    this.vehicleId = vehicleId;
  }

  vacate() {
    this.available = true;
    this.vehicleId = '';
  }
}

module.exports = ParkingSpot;
