// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
// $(function(){
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    // Your Code Here
    //increase the number of milliseconds by 10
    this.millisecs += 10;
    //if the number of milliseconds reaches 1000, then reset to 0
    if (this.millisecs >= 1000) {
      this.millisecs = 0;
    //it increments the number of seconds
      this.secs += 1;
    } if (this.secs >= 60) {
    //if the number of seconds reaches 60, reset to 0
      this.secs = 0;

    //it increments the number ofminutes
      this.mins += 1;
    }

  },
  reset: function(){
    // Your Code Here
    // reset counts of minutes, seconds, and milliseconds to 0
    this.mins = 0;
    this.secs = 0;
    this.millisecs = 0;
    // resets the list of laps to empty
    this.laps = [];
  },
  start: function(){
    // Your Code Here
    // if it's not running
    if (this.isRunning === false) {
      //set the state of the stopwatch to 'running'
      this.isRunning = true;
      //call 'tickClick' to start the ticking of clock
      this.tickClock();
    }
    //if it was running, do nothing
  },
  stop: function(){
    // Your Code Here
    // if it's running
    if (this.isRunning === true) {
      this.isRunning = false;
    }
      //set it 
  },
  lap: function(){
    // Your Code Here
    //if running
    if (this.isRunning === true) {
      this.laps.push(this.mins + ":" + this.secs + ":" + this.millisecs);
    }
      //find the value of mins, sec, millisecs
      //add a record of current value of mins, secs, millisec to the list of laps
    //if not running, do nothing
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    // Your Code Here
    //find the value of mins
    var valueOfMins = $('#mins').html(ViewHelpers.zeroFill(mins, 2));

    //find the value of secs
    var valueOfSecs = $('#secs').html(ViewHelpers.zeroFill(secs, 2));

    //find the value of millisecs 
    var valueOfMillisecs = $('millisecs').html(ViewHelpers.zeroFill(millisecs, 3));

    //display in the required format
  },
  updateLapListDisplay: function(laps){
    // Your Code Here
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here

    //turn number into a string
    var numberToString = number.toString();
    var numberOfZeros = length - numberToString.length;
    //if number < length
    if (numberOfZeros === 1) {
    numberToString = '0' + numberToString;
    }
    if (numberOfZeros === 2) {
      numberToString = '00' + numberToString;
    }
    //return number as a string
      //pad on left with zeros until its length === length

      return numberToString;

    } 

    //if it doesn't have fewer digits 
      //return the number as a string
    };
      
      

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    // Your Code Here
    //find the current time values from Stopwatch
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
    //call updateTimeDisplay
  },
  handleClickStart: function() {
    // Your Code Here
    // if stopwatch is running
    if (Stopwatch.isRunning === false) {
      Stopwatch.start();
    }
      //record a lap
      //update display of laps
    //if not running
      //do nothing
  },
  handleClickStopReset: function(){
    // Your Code Here
    // if stopwatch is running
    if (Stopwatch.isRunning) {
      Stopwatch.stop();
    }
    else {
      Stopwatch.reset();
      ViewEngine.updateTimeDisplay(0, 0, 0);
      ViewEngine.updateLapListDisplay(Stopwatch.laps);
    }
      //stop it
    //if not running 
      //reset it
    //update time display
  },
  handleClickLap: function(){
    // Your Code Here
    //if stopwatch running
    if (Stopwatch.isRunning) {
      Stopwatch.lap();
      ViewEngine.updateLapListDisplay(Stopwatch.lap);
    }
      //record a lap
      //update display of laps
    //if not running
      //do nothing
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
  $('#start').on('click', function() {
    AppController.handleClickStart();
  })
  $('#stop').on('click', function() {
    AppController.handleClickStopReset();
  }) 

};
// });