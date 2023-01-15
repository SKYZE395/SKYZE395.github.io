// NOTE! The steps in this file are basically identical to the ones you
(
  function(){
  var speakWord = "Good Bye";

  function byeSpeaker(name) {};

  byeSpeaker.speak = function speak(name){
      console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})();