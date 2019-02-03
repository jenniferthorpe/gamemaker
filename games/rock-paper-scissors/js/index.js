//need to implement lizard and spock

//Thanks to @wearnotgroot, @pradeepce, @storbek, @hermangsk & @hman1911

var playerWin = 0;
var aiWin = 0;
var draws = 0;
var playerRoll; //rock = 1, paper = 2, scissors = 3
var gameMessage = $('#game-message');//Clean up the JS a lil
var scoreBoard = $('#scoreboard');


//rock click
$('.rock').click(function() {
  playerRoll = 1;
  var computerRoll = Math.floor(Math.random() * 3 + 1);//Rock, Paper, Scissors genius AI
  
  //draw case
  if (computerRoll === playerRoll) {
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-draw">Draw!</p>' + '<p class="computer-message">The Computer chose rock too!</p>').fadeIn(300);
      
      draws++;
      $('#draws').html('').append(draws);
    });
    
    // rock vs AI paper
  } else if (playerRoll === 1 && computerRoll === 2) {
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-lose">You lost</p>' + '<p class="computer-message">The Computer chose paper!</p>').fadeIn(300);
      
      aiWin++;
      $('#losses').html('').append(aiWin);
    });
    
    // rock vs AI scissors
  } else {
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-won">You Won!</p>' + '<p class="computer-message">The Computer chose scissors!</p>').fadeIn(300);
      
      playerWin++;
      $('#wins').html('').append(playerWin);
    });                
    
  }
  /*console.log("Player Rolled " + playerRoll);
  console.log("computer Rolled " + computerRoll);*/
});//end of rock click

//paper click
$('.paper').click(function() {
  playerRoll = 2;
  var computerRoll = Math.floor(Math.random() * 3 + 1);
  
  //draw
  if (computerRoll === playerRoll) {
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-draw">Draw!</p>' + '<p class="computer-message">The Computer chose paper too!</p>').fadeIn(300);
      
      draws++;
      $('#draws').html('').append(draws);
    });
  //paper vs AI rock
  } else if (playerRoll === 2 && computerRoll === 1) {
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-won">You Won!</p>' + '<p class="computer-message">The Computer chose rock!</p>').fadeIn(300);
      
      playerWin++;
      $('#wins').html('').append(playerWin);
    });
  //paper vs AI scissors
  } else {
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-lose">You lost</p>' + '<p class="computer-message">The Computer chose scissors</p>').fadeIn(300);
      
      aiWin++;
      $('#losses').html('').append(aiWin);
    });
  }
  
  /*console.log("Player Rolled " + playerRoll);
  console.log("computer Rolled " + computerRoll);*/
});//end of paper click

//scissors click
$('.scissors').click(function() {
  playerRoll = 3;
  var computerRoll = Math.floor(Math.random() * 3 + 1);
  //draw
  if (computerRoll === playerRoll) {
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-draw">Draw!</p>' + '<p class="computer-message">The Computer chose scissors too!</p>').fadeIn(300);
      
      draws++;
      $('#draws').html('').append(draws);
    });
  //scissors vs AI paper
  } else if (playerRoll === 3 && computerRoll === 2) {
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-won">You Won!</p>' + '<p class="computer-message">The Computer chose paper</p>').fadeIn(300);
      
      playerWin++;
      $('#wins').html('').append(playerWin);
    });
  //scissors vs AI rock
  } else {
    gameMessage.fadeOut(300, function() {
      gameMessage.html('').append('<p class="game-lose">You lost</p>' + '<p class="computer-message">The Computer chose rock</p>').fadeIn(300);
      
      aiWin++;
      $('#losses').html('').append(aiWin);
    });
  }//end of scissors click
  
  /*console.log("Player Rolled " + playerRoll);
  console.log("computer Rolled " + computerRoll);*/
});

//press "Reset scores" to reset all scores
$('#reset-scores').click(function() {
  playerWin = 0;
  $('#wins').html(playerWin);
  draws = 0;
  $('#draws').html(draws);
  aiWin = 0;
  $('#losses').html(aiWin);
});