function start() {

	let gameArea = document.getElementsByClassName("shotgun-page")[0];

	let startArea = document.createElement('div');

	let input = document.createElement('input');
	input.setAttribute('value', "player");

	let startBtn = document.createElement('button');
	let t = document.createTextNode('start');
	startBtn.appendChild(t);
	startBtn.addEventListener('click', function() {
		interface(input, gameArea);
		gameArea.removeChild(startArea);
	});

	// interface(input, gameArea);

	gameArea.appendChild(startArea);
	startArea.appendChild(input);
	startArea.appendChild(startBtn);
}

function interface(input, gameArea) {

	let winner;
	let usr = new Player(input.value);
	let cmp = new Player('data');

	let interface = document.createElement('div');
	interface.style.border = 'solid';
	interface.style.backgroundColor = 'white';
	interface.style.height = '40%';
	interface.style.width = '50%';
	// interface.style.display = 'flex';
	// interface.style.flexDirection = 'column';
	// interface.style.justifyContent = 'space-around';
	// interface.style.alignItems = 'center';
	interface.style.textAlign = 'center';

	gameArea.appendChild(interface);

	let buttons = document.createElement('div');
	// buttons.style.border = "solid";
	buttons.style.display = 'flex';
	buttons.style.justifyContent = 'space-between';

	let reloadBtn = document.createElement('button');
	let t = document.createTextNode('reload');
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
    gameArea.removeChild(interface);
    start();
  });

	let bulletCountUsr = document.createElement('p');
	bulletCountUsr.innerHTML = usr.name + ' ammo';
	// bulletCountUsr.style.border = 'solid';
	// bulletCountUsr.style.margin = '0';

	let ammoUsr = document.createElement('p');
	ammoUsr.innerHTML = usr.bullets;
	// ammoUsr.style.border = 'solid';
	// ammoUsr.style.margin = '0';

	let bulletCountCmp = document.createElement('p');
	bulletCountCmp.innerHTML = cmp.name + ' ammo';
	// bulletCountCmp.style.border = 'solid';
	// bulletCountCmp.style.margin = '0';

	let ammoCmp = document.createElement('p');
	ammoCmp.innerHTML = cmp.bullets;
	// ammoCmp.style.border = 'solid';
	// ammoCmp.style.margin = '0';

	let msg = document.createElement('p');
	// msg.style.margin = '0';
  let msg2 = document.createElement('p');
	// msg2.style.margin = '0';

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
