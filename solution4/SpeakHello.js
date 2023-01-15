(
  function(){
    var speakWord = "Hello";

    function helloSpeaker(name) {};

    helloSpeaker.speak = function(name){
      console.log(speakWord + " " + name);
    }
    window.helloSpeaker = helloSpeaker;
})();