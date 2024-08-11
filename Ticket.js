const PAY_RATE_PER_HOUR = 10;

class Ticket {
  constructor(id, entryTime) {
    this.ticketId = `Ticket Id ${id}`;
    this.entryTime = entryTime;
  }

  calculatePayment(leaveTime) {
    console.log('leaveTime: ', leaveTime);
    console.log('entryTime: ', this.entryTime);
    // duration in milliseconds
    const duration = leaveTime - this.entryTime;
    const payment = duration / 3600000 * PAY_RATE_PER_HOUR;

    console.log("The parking fee is: $", payment);
    return payment;
  }
}

module.exports = Ticket;
