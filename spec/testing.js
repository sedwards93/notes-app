'use strict';

function expect(actual) {

  var passed = ('     ---> Passed! 🙌')

  return {
  
  toBeTrue: function() {
    if (!actual) {
      throw new Error("Failed: " + actual + " is not truthy 😭");
    } else {
      console.log(passed);
    }
  }, 
  
  toBeFalse: function() {
    if (actual) {
      throw new Error ("Failed: " + actual + " is not falsy 😭");
    } else {
      console.log(passed);
    }
  }, 
  
  toEqual: function(expected) {
    if (actual == expected) {
      console.log(passed);
    } else {
      throw new Error("Failed: " + actual + " is not equal to " + expected + " 😭");
      }
    }, 
  
  toNotEqual: function(expected) {
    if (actual != expected) {
      console.log(passed)
    } else {
      throw new Error("Failed: " + actual + " is equal to " + expected + " 😭");
       }
     }
   }
}


  function it(label, callback) {
    console.log(`Test: ${label}`)
    callback()
  }

