$(document).ready(function(){
  // GLOBAL VARIABLES ====================================================
  var wins = 0;
  var losses = 0;
  var playerScore = 0;
  var randomNumber;
  var randomGemNum;

  // FUNCTIONS ===========================================================
  //Restart Function
  var restart = function(){
    playerScore = 0;
    $("#total-score").empty();
    $("#gem-display").empty();
    play();
  }
  
  // Random Number to Match Function
  var setRandomNumber = function(){
    for (i = 0; i < 1; i++){
      var randomNum = Math.floor(Math.random() * 102 + 19);
      $("#random-number").text(randomNum);
      return randomNum
    }
  };

  // Random Gem Numbers Function
  var setGemNumber = function(){
    for (i = 0; i < 4; i++){
      randomGemNumber = Math.floor(Math.random() * 12 + 1);
      //Gem images in an array.
      var gemImage = ["assets/images/gems_01.png","assets/images/gems_02.png","assets/images/gems_03.png","assets/images/gems_04.png"];
      //
      var gem = $("<img>");

      gem.attr({
        "class": 'gem-image',
        "numberRandom": randomGemNumber,
        "src": gemImage[i],
      });

      $("#gem-display").append(gem);
    }
  };

  //Update Player Score Function
  var updatePlayerScore = function(gemClicked){
    var gemNumber = parseInt(gemClicked.attr("numberRandom"));
    playerScore = playerScore + gemNumber;
    $("#total-score").text(playerScore);
  }

  //Check Score Function
  var checkScore = function (){
    //Winning Condition
    if (playerScore == randomNumber){
      wins++;
      alert("You win!");
      $("#wins").text("Wins: " + wins);
      restart();
    }
    //Losing Condition
    if (playerScore > randomNumber) {
      losses++;
      alert("You lose!");
      $("#losses").text("Losses: " + losses);
      restart();
    }
  }

  //Play Function
  var play = function(){
    randomNumber = setRandomNumber();
    randomGemNum = setGemNumber();
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

    //Creating a click event on gem images
    $(".gem-image").on("click", function() {
      updatePlayerScore($(this));
      checkScore();
    });

    //Replay Feature
    if (userPlay == false){
      var userReplay = confirm("Let's play again!")
      return userReplay;
    }
  }

  //BEGIN GAME ===========================================================
  var userPlay = confirm("Do you want to play a game of Gem Collector?");
    if ((userPlay == true) || (userReplay == true)) {
      
      play();
      userPlay = false;

    }
     
  });
