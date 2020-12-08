'use strict';

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('Assertion passed!');
    }
  }, isFalse: function(assertionToCheck) {
    if (assertionToCheck) {
      throw new Error ("Assertion failed: " + assertionToCheck + " is not falsy");
    } else {
      console.log('Assertion passed!');
    }
  }, toEqual: function(a, b) {
    if (a === b) {
      console.log('Assertion passed!');
    } else {
      throw new Error("Assertion failed: " + a + " is not equal to " + b);
      }
    }, toNotEqual: function(a, b) {
      if (a !== b) {
        console.log('Assertion passed!')
      } else {
        throw new Error("Assertion failed: " + a + " is equal to " + b);
        }
      }
    }


