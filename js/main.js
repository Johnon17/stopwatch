//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class MakeStopWatch {
  constructor(model, size, year, colour) {
    this.model = model
    this.size = size
    this.year = year
    this.colour = colour
    this.start = ""
    this.stop = ""
    this.timeElapsed = ""
  }
  bark() {
    console.log("Bark")
  }
  startWatch() {
    this.start = Date.now()
    console.log(`${this.start}`)
  }
  stopWatch() {
    this.stop = Date.now()
    this.timeElapsed = (this.stop - this.start) / 1000
  }
  timePassed() {
    console.log(`${this.timeElapsed} seconds`)
  }
  resetWatch() {
    this.start = ""
    this.stop = ""
    this.timeElapsed = ""
  }
}