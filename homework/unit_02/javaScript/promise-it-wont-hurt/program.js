setTimeout(function() {
    console.log('TIMED OUT!')
}, 300);

'use strict';
// var os = require('os'); os.tmpDir = os.tmpdir;

var promise = new Promise(function(fulfill, reject) {
    var isFulfilled = true;
    if (isFulfilled) {
        fulfill('FULFILLED!');
    } 
    else {
        reject('REJECTED!');
    }
    setTimeout(function() {
    }, 300);
});
promise
    .then(function(fromResolve) {
        console.log(`${fromResolve}`)
        return "FULFILLED!";
    })
    .catch(function(onReject) {
        console.log('REJECTED!');
        return "REJECTED!";
    });
