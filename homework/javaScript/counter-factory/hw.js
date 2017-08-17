// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function(){
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },
  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },
  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function(counter){ //
      return counter.countId !== countId
    });
  }
};

// UI //
const Presenter = {
  insertCounterComponent: function(newCountId){
    console.log(`insert counter component #${newCountId}`);
    let newCounterComponent = document.createElement('div');
    newCounterComponent.innerHTML =
    `<h3>Count: <span>0</span></h3> <button class='increment'> +1 </button> <button class='delete'> Delete </button>`;
    newCounterComponent.className += ' counter';
    newCounterComponent.dataset.countId = newCountId;
    newCounterComponent.getElementsByClassName('increment')[0].onclick= AppController.onClickIncrement;
    newCounterComponent.getElementsByClassName('delete')[0].onclick = AppController.onClickDelete;
    document.getElementById('counter-list').appendChild(newCounterComponent);

    // Your Code Here
  },
  refreshCounterComponent: function(countId){
    console.log(`refresh counter component #${countId}`);
    // find counter with 'counterId'
    let val = CounterCollection.getCounterValue(countId);
    document.querySelector(`[data-count-id="${countId}"] span`).innerHTML = val;
    //find value shown in div
    // find the current count value
    // set the current count value (div) equal to the counter current value
    // Your Code Here
  },
  removeCounterComponent: function(countId){             // REACH
    console.log(`remove counter component #${countId}`);
    // Your Code Here
    let counterComponent = document.querySelector(`[data-count-id="${countId}"]`)
    console.log(counterComponent, counterComponent.parent);
    counterComponent.parentNode.removeChild(counterComponent);
    // find counter 'count id' and set it to a variable
    // remove that specific component from the DOM
  }
};

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function(event){
    // Your Code Here
    CounterCollection.createCounter();
    Presenter.insertCounterComponent(CounterCollection.lastCountId);
    console.log(`click new counter (#${CounterCollection.lastCountId})`);

    // locate 
    //create new component = new counter

  },
  onClickIncrement: function(event){
    // Your Code Here
    // which counter the IU = to
    let countId = Number(event.target.parentNode.dataset.countId);
    console.log(`click increment #${countId}`);
    CounterCollection.incrementCounter(countId);
    Presenter.refreshCounterComponent(countId);

    // increment the value of the corresponding counter
    //update visible count value inside IU 
  },
  onClickDelete: function(event){ 
    let countId = Number(event.target.parentNode.dataset.countId);
    console.log(`click delete #${countId}`);
    CounterCollection.incrementCounter(countId);
    Presenter.removeCounterComponent(countId);                          // REACH
    // Your Code Here
    // which counter the IU == to
    // destroy correspongding counter without affecting others
    // destroy counter
    //removes IU component from DOM
  }
};

window.onload = function(){
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};
