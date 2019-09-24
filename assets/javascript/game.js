$(document).ready(function(){
  // GLOBAL VARIABLES ====================================================
  var wins = 0;
  var losses = 0;
  var userPlay = true;
  var randomNumber;
  var randomGemNumber;

  // FUNCTIONS ===========================================================
  //Assigns a random number for the user to match.
  var setRandomNumber = function(){
    for (i = 0; i < 1; i++){
      randomNumber = Math.floor(Math.random() * 102 + 19);
      $("#random-number").text(randomNumber);
    }
  };

  // Assigns random numbers to the gems and prints the images to the correct box
  var setGemNumber = function(){
    for (i = 0; i < 4; i++){
      randomGemNumber = Math.floor(Math.random() * 12 + 1);

      var gemImage = ["../images/gems_01.png","../images/gems_02.png","../images/gems_03.png","../images/gems_04.png"];

      var gem = $("<img>");

      gem.attr({
        "class": 'gemImage',
        "numberRandom": randomGemNumber,
        "src": gemImage[i],
      });

      $("#gem-display").append(gem);
    }
  };

  //BEGIN GAME ===========================================================
  var playFunction = function(){
    if (userPlay === true){
      setGemNumber();
      setRandomNumber();   
    }
  }
});