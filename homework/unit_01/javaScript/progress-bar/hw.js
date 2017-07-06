// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    document.getElementById('numeric-display').innerHTML = timerValue;
    // Your Code Here
  },
  drawProgressBars: function(timerValue){
    var timeElapsed = 100 - timerValue;
    document.getElementsByClassName('progress-bar')[0].style.width = timeElapsed + '%';
    // Your Code Here
  },
  drawLitFuses: function(timerValue){
    var unlitFuses = timerValue / 100;
    document.getElementsByClassName('unburnt')[0].style.width = unlitFuses * 98 + '%';
    document.getElementsByClassName('burnt')[0].style.width = (1 - unlitFuses) * 98 + '%';
    // Your Code Here
  },
  drawCrawlers: function(timerValue){
    var timePassed = 100 - timerValue;
    if (timePassed % 2 === 0) {
      document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
    } else {
      document.getElementsByClassName('crawler')[0].style.marginTop =  '10px';
    }
    document.getElementsByClassName('crawler')[0].style.marginLeft = (timePassed * 10) + 'px';
    // Your Code Here
  }
};