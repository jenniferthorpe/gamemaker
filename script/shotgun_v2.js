let usr;
let cmp;
let winner;
let loser;

let gameArea = document.getElementsByClassName("shotgun-page")[0];

let interface = document.createElement('div');
interface.setAttribute('class', 'interface');

let buttons = document.createElement('div');
buttons.setAttribute('class', 'buttons');

let reloadBtn = document.createElement('button');
reloadBtn.setAttribute('id', 'reload-btn');
t = document.createTextNode('reload');
reloadBtn.appendChild(t);
reloadBtn.addEventListener('click', function() {
  usr.reload();
  game();
});

let blockBtn = document.createElement('button');
blockBtn.setAttribute('id', 'block-btn');
t = document.createTextNode('block');
blockBtn.appendChild(t);
blockBtn.addEventListener('click', function() {
  usr.block();
  game();
});

let shootBtn = document.createElement('button');
shootBtn.setAttribute('id', 'shoot-btn');
t = document.createTextNode('shoot');
shootBtn.appendChild(t);
shootBtn.addEventListener('click', function() {
  usr.shoot();
  game();
});

let sgBtn = document.createElement('button');
sgBtn.setAttribute('id', 'shotgun-btn');
t = document.createTextNode('shotgun');
sgBtn.appendChild(t);
sgBtn.addEventListener('click', function() {
  usr.shotgun();
  game();
});

let continueBtn = document.createElement('button');
continueBtn.setAttribute('id', 'continue-btn');
t = document.createTextNode('play again');
continueBtn.appendChild(t);
continueBtn.addEventListener('click', function() {
  buttons.removeChild(continueBtn);
  newGame();
});

let bulletCountUsr = document.createElement('p');
let ammoUsr = document.createElement('p');
let bulletCountCmp = document.createElement('p');
let ammoCmp = document.createElement('p');
let msg = document.createElement('p');
let msg2 = document.createElement('p');



function newGame() {

  let sb = document.getElementsByClassName('start-button')[0];
	sb.style.display = 'none';

  gameArea.appendChild(interface);

  interface.appendChild(buttons);

  buttons.appendChild(blockBtn);
  buttons.appendChild(reloadBtn);
  buttons.appendChild(shootBtn);
  buttons.appendChild(sgBtn);
  buttons.appendChild(continueBtn);

  reloadBtn.style.display = 'block';

  // blockBtn.style.display = 'block';
  // shootBtn.style.display = 'block';

  blockBtn.style.display = 'none';
  shootBtn.style.display = 'none';

  sgBtn.style.display = 'none';
  continueBtn.style.display = 'none';

  interface.appendChild(bulletCountUsr);
  interface.appendChild(ammoUsr);
  interface.appendChild(bulletCountCmp);
  interface.appendChild(ammoCmp);
  interface.appendChild(msg);
  interface.appendChild(msg2);

  usr = new Player('player');
  cmp = new Player('data');

  msg.innerHTML = '';
  msg2.innerHTML = '';

  // msg2.innerHTML = usr.name + ' fumbles with it while '
  // + cmp.name + ' looks confused and the battle continues';

  bulletCountUsr.innerHTML = usr.name + ' ammo';
  ammoUsr.innerHTML = usr.bullets;
  bulletCountCmp.innerHTML = cmp.name + ' ammo';
  ammoCmp.innerHTML = cmp.bullets;
}

function game() {

  cmp.move();
  updateButtons();
  updateText();

}

function findWinner() {

  if (usr.action === 'shoots' &&
    (cmp.action === 'reloads' || cmp.action === 'clicks') ||
    (usr.action === 'shotgun' && cmp.action !== 'shotgun')) {

    winner = usr;
    loser = cmp;

  }
  if (cmp.action === 'shoots' &&
    (usr.action === 'reloads' || usr.action === 'clicks') ||
    (cmp.action === 'shotgun' && usr.action !== 'shotgun')) {

    winner = cmp;
    loser = usr;

  }
}

function isWinner() {

  findWinner();

  if (winner === usr || winner === cmp) {
    return true;
  }
  else {
    return false;
  }
}

function updateText() {

  ammoUsr.innerHTML = usr.bullets;
  ammoCmp.innerHTML = cmp.bullets;

  if (isWinner() && winner.action === 'shotgun') {

    winner.action = 'takes out the shotgun';

  }

  if (cmp.action === 'clicks') {

    msg.innerHTML = usr.name + ' ' + usr.action
    + ' while a frenzied ' + cmp.name + ' tries to fire its gun...';

    msg2.innerHTML = '... but forgets to put a bullet in it first';

  }
  else if (usr.action === 'shotgun' && cmp.action === 'shotgun') {

    msg.innerHTML = 'both players reaches for the shotgun';

    msg2.innerHTML = usr.name + ' fumbles with it while '
    + cmp.name + ' looks confused and the battle continues';

  }
  else {

    msg.innerHTML = usr.name + ' ' + usr.action
    + ' while ' + cmp.name + ' ' + cmp.action;

    if (usr.action === 'shoots' && cmp.action === 'shoots') {

      msg2.innerHTML = 'both players miss their target out of shock!';

    }
    else {

      msg2.innerHTML = '';

    }
  }
  if (isWinner()) {

    if (winner.action === 'takes out the shotgun'
    && loser.action === 'shoots') {

      msg.innerHTML = winner.name + ' ' + winner.action
      + ' while ' + loser.name + ' ' + loser.action +
      ' in panick with a shaky hand and fails to aim in the right direction';

    }

    msg2.innerHTML = 'winner is ' + winner.name;

  }
}

function updateButtons() {

  switch (cmp.bullets) {
    case 0:
      blockBtn.style.display = 'none';
      break;
    case 1:
      blockBtn.style.display = 'block';
      break;
  }

  switch (usr.bullets) {
    case 0:
      shootBtn.style.display = 'none';
      break;
    case 1:
      shootBtn.style.display = 'block';
      break;
    case 3:
      reloadBtn.style.display = 'none';
      blockBtn.style.display = 'none';
      shootBtn.style.display = 'none';
      sgBtn.style.display = 'block';
      break;
  }

  if (usr.action === 'shotgun' && cmp.action === 'shotgun') {
    reloadBtn.style.display = 'block';
    sgBtn.style.display = 'none';
  }

  if (isWinner()) {

    reloadBtn.style.display = 'none';
    blockBtn.style.display = 'none';
    shootBtn.style.display = 'none';
    sgBtn.style.display = 'none';

    continueBtn.style.display = 'block';

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

	this.move = function() {

		let n = parseInt((3 * Math.random()));

    // n = 1;

		if (this.bullets === 3) {
			this.shotgun();
		}
    // else if (this.bullets === 1) {
    //   this.shoot();
    // }
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
	}
}
