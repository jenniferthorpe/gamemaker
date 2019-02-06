var winner;
var usr;
var cmp;

let gameArea = document.getElementsByClassName("shotgun-page")[0];

let interface = document.createElement('div');
interface.setAttribute('class', 'interface');

let buttons = document.createElement('div');
buttons.setAttribute('class', 'buttons');

let reloadBtn = document.createElement('button');
t = document.createTextNode('reload');
reloadBtn.appendChild(t);
reloadBtn.addEventListener('click', function() {
  usr.reload();
  game();
});

let shootBtn = document.createElement('button');
t = document.createTextNode('shoot');
shootBtn.appendChild(t);
shootBtn.addEventListener('click', function() {
  usr.shoot();
  game();
});

let blockBtn = document.createElement('button');
t = document.createTextNode('block');
blockBtn.appendChild(t);
blockBtn.addEventListener('click', function() {
  usr.block();
  game();
});

let sgBtn = document.createElement('button');
t = document.createTextNode('shotgun');
sgBtn.appendChild(t);
sgBtn.addEventListener('click', function() {
  usr.shotgun();
  game();
});

let continueBtn = document.createElement('button');
t = document.createTextNode('play again?');
continueBtn.appendChild(t);
continueBtn.addEventListener('click', function() {
  interface.removeChild(continueBtn);
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
  // gameArea.removeChild(knapp);

  gameArea.appendChild(interface);

  interface.appendChild(buttons);

  buttons.appendChild(reloadBtn);
  buttons.appendChild(shootBtn);
  buttons.appendChild(blockBtn);
  buttons.appendChild(sgBtn);

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

function round() {

  cmp.move();

  if (usr.action === 'shoots' &&
    (cmp.action === 'reloads' || cmp.action === 'clicks') ||
    (usr.action === 'shotgun' && cmp.action !== 'shotgun')) {

    winner = usr;

  }
  if (cmp.action === 'shoots' &&
    (usr.action === 'reloads' || usr.action === 'clicks') ||
    (cmp.action === 'shotgun' && usr.action !== 'shotgun')) {

    winner = cmp;

  }
  if (winner != undefined && winner.action === 'shotgun') {

    winner.action = 'takes out the shotgun';

  }
}

function game() {

  if (usr.action === 'no ammo') {

    msg.innerHTML = 'not enough ammo to use the shotgun';

  }

  else {

    round();

    ammoUsr.innerHTML = usr.bullets;
    ammoCmp.innerHTML = cmp.bullets;

    msg.innerHTML = usr.name + ' ' + usr.action
    + ' while ' + cmp.name + ' ' + cmp.action;

    msg2.innerHTML = '';

    // msg2.innerHTML = usr.name + ' fumbles with it while '
    // + cmp.name + ' looks confused and the battle continues';

    if (usr.action === 'shoots' && cmp.action === 'shoots') {

      msg2.innerHTML = 'both players miss their target out of shock!';

    }
    if (usr.action === 'shotgun' && cmp.action === 'shotgun') {

      msg.innerHTML = 'both players reaches for the shotgun';

      msg2.innerHTML = usr.name + ' fumbles with it while '
      + cmp.name + ' looks confused and the battle continues';

    }
    if (winner === usr || winner === cmp) {

      interface.removeChild(buttons);

      msg2.innerHTML = 'winner is ' + winner.name;

      interface.appendChild(continueBtn);
    }
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
	}
}
