// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker =

(function(window) {
  var byeSpeaker = {}; // Creating the byeSpeaker object

  var speakWord = "Good Bye"; // Defining the speakWord variable

  byeSpeaker.speak = function(name) { // Attaching the speak method to byeSpeaker
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker; // Exposing byeSpeaker to the global scope
})(window); // Passing the window object to the IIFE
