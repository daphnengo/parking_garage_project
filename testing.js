const Parking = require('./Parking');
const Vehicle = require('./Vehicle');

const parking = new Parking(100);

const car1 = new Vehicle("ABC123");
const car2 = new Vehicle("XYZ789");

parking.park(car1);
parking.park(car2);

setTimeout(() => {
  parking.exit(car1, 0);
}, 5000);
