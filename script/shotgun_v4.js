let user;
let computer;
let winner;
let loser;

let interface = document.getElementsByClassName('game-interface')[0];

let buttonsTop = document.getElementsByClassName('buttons-top')[0];
let buttonsBottom = document.getElementsByClassName('buttons-bottom')[0];
let reloadButton = document.getElementById('reload-button');
let blockButton = document.getElementById('block-button');
let shootButton = document.getElementById('shoot-button');
let shotgunButton = document.getElementById('shotgun-button');
let continueButton = document.getElementById('continue-button');

let messageOne = document.getElementsByClassName('message-one')[0];
let messageTwo = document.getElementsByClassName('message-two')[0];
let winnerMessage = document.getElementsByClassName('winner-message')[0];
let ammoUser = document.getElementsByClassName('ammo-user')[0];
let bulletCounterUser =
document.getElementsByClassName('bullet-counter-user')[0];
let ammoComputer = document.getElementsByClassName('ammo-computer')[0];
let bulletCounterComputer =
document.getElementsByClassName('bullet-counter-computer')[0];

function newGame() {

  let sb = document.getElementsByClassName('start-button')[0];
	sb.style.display = 'none';

  buttonsTop.style.display = 'flex';
  buttonsBottom.style.display = 'flex';

  reloadButton.style.display = 'block';
  blockButton.style.display = 'none';
  shootButton.style.display = 'none';
  shotgunButton.style.display = 'none';
  continueButton.style.display = 'none';

  user = new Player('player');
  computer = new Player('data');

  messageOne.innerHTML = '';
  messageTwo.style.display = 'none';
  winnerMessage.style.display = 'none';

  ammoUser.innerHTML = user.name + ' ammo';
  bulletCounterUser.innerHTML = user.bullets;
  ammoComputer.innerHTML = computer.name + ' ammo';
  bulletCounterComputer.innerHTML = computer.bullets;
}

function round() {

  computer.move();
  updateButtons();
  updateText();

}

function findWinner() {

  if (user.action === 'shoots' &&
    (computer.action === 'reloads' || computer.action === 'clicks') ||
    (user.action === 'shotgun' && computer.action !== 'shotgun')) {

    winner = user;
    loser = computer;

  }
  if (computer.action === 'shoots' &&
    (user.action === 'reloads' || user.action === 'clicks') ||
    (computer.action === 'shotgun' && user.action !== 'shotgun')) {

    winner = computer;
    loser = user;

  }
}

function isWinner() {

  findWinner();

  if (winner === user || winner === computer) {
    return true;
  }
  else {
    return false;
  }
}

function updateText() {

  bulletCounterUser.innerHTML = user.bullets;
  bulletCounterComputer.innerHTML = computer.bullets;

  if (isWinner() && winner.action === 'shotgun') {

    winner.action = 'takes out the shotgun';

  }

  if (computer.action === 'clicks') {

    messageOne.innerHTML = user.name + ' ' + user.action
    + ' while a frenzied ' + computer.name + ' tries to fire its gun ...';

    messageTwo.innerHTML = '... but forgets to put a bullet in it first';

    messageTwo.style.display = 'block';

  }
  else if (user.action === 'shotgun' && computer.action === 'shotgun') {

    messageOne.innerHTML = 'both players reaches for the shotgun';

    messageTwo.innerHTML = user.name + ' fumbles with it while '
    + computer.name + ' looks confused and the battle continues';

    messageTwo.style.display = 'block';

  }
  else {

    messageOne.innerHTML = user.name + ' ' + user.action
    + ' while ' + computer.name + ' ' + computer.action;

    if (user.action === 'shoots' && computer.action === 'shoots') {

      messageTwo.innerHTML = 'both players miss their target out of shock!';

      messageTwo.style.display = 'block';

    }
    else {

      messageTwo.innerHTML = '';

      messageTwo.style.display = 'none';

    }
  }
  if (isWinner()) {

    if (winner.action === 'takes out the shotgun'
    && loser.action === 'shoots') {

      messageOne.innerHTML = winner.name + ' ' + winner.action
      + ' while a frightned ' + loser.name + ' ' + loser.action + ' ... ';

      messageTwo.innerHTML =
      '... who panicked and with a shaky hand fails to aim in the right direction';

      messageTwo.style.display = 'block';

    }

    winnerMessage.innerHTML = 'winner is ' + winner.name;

    winnerMessage.style.display = 'flex';

  }
}

function updateButtons() {

  switch (computer.bullets) {
    case 0:
      blockButton.style.display = 'none';
      break;
    case 1:
      blockButton.style.display = 'block';
      break;
  }

  switch (user.bullets) {
    case 0:
      shootButton.style.display = 'none';
      break;
    case 1:
      shootButton.style.display = 'block';
      break;
    case 3:
      buttonsTop.style.display = 'none';
      buttonsBottom.style.display = 'none';
      shotgunButton.style.display = 'block';
      break;
  }

  if (user.action === 'shotgun' && computer.action === 'shotgun') {
    buttonsTop.style.display = 'flex';
    buttonsBottom.style.display = 'flex';
    shotgunButton.style.display = 'none';
  }

  if (isWinner()) {

    buttonsTop.style.display = 'none';
    buttonsBottom.style.display = 'none';
    shotgunButton.style.display = 'none';

    continueButton.style.display = 'block';

  }
}

function Player(name) {

	this.name = name;
	this.action = '';
	this.bullets = 0;

	this.reload = function() {
		this.action = 'reloads';
		this.bullets++;
	}
	this.shoot = function() {
		if (this.bullets > 0) {
			this.action = 'shoots';
			this.bullets--;
		}
		else {
			this.action = 'clicks';
		}
	}
	this.block = function() {
		this.action = 'blocks';
	}
	this.shotgun = function() {
    if (this.bullets >= 3) {
      this.action = 'shotgun';
			this.bullets -= 3;
    }
    else {
      this.action = 'no ammo';
    }
	}

  let n, n2;

	this.move = function() {

    let sameNumber = true;

    while (sameNumber) {

      if (n !== n2) {

        if (this.bullets === 3) {
          this.shotgun();
        }
        else {
          switch (n) {
            case 0:
              this.block();
              break;
            case 1:
              this.reload();
              break;
            case 2:
              this.shoot();
              break;
          }
        }

        n2 = n;

        sameNumber = false;

      }
      else {

        n = parseInt((3 * Math.random()));

      }
    }

    // n = parseInt((3 * Math.random()));

    // if (this.bullets === 3) {
    //   this.shotgun();
    // }
    // else {
    //   switch (n) {
    //     case 0:
    //       this.block();
    //       break;
    //     case 1:
    //       this.reload();
    //       break;
    //     case 2:
    //       this.shoot();
    //       break;
    //   }
    // }
	}
}
