// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =

(function(window) {
  var helloSpeaker = {}; // Creating the helloSpeaker object

  var speakWord = "Hello"; // Defining the speakWord variable

  helloSpeaker.speak = function(name) { // Attaching the speak method to helloSpeaker
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker; // Exposing helloSpeaker to the global scope
})(window); // Passing the window object to the IIFE
