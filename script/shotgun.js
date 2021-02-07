let usr;
let cmp;
let winner;
let loser;

let gameArea = document.getElementsByClassName("shotgun-page")[0];

let interface = document.createElement('div');
interface.setAttribute('id', 'interface');

let buttonsMain = document.createElement('div');
buttonsMain.setAttribute('id', 'buttons-main');

let buttonsTop = document.createElement('div');
buttonsTop.setAttribute('id', 'buttons-top');

let buttonsBottom = document.createElement('div');
buttonsBottom.setAttribute('id', 'buttons-bottom');

let reloadBtn = document.createElement('button');
reloadBtn.setAttribute('id', 'reload-btn');
reloadBtn.setAttribute('class', 'interface-buttons');
t = document.createTextNode('reload');
reloadBtn.appendChild(t);
reloadBtn.addEventListener('click', function() {
  usr.reload();
  round();
});

let blockBtn = document.createElement('button');
blockBtn.setAttribute('id', 'block-btn');
blockBtn.setAttribute('class', 'interface-buttons');
t = document.createTextNode('block');
blockBtn.appendChild(t);
blockBtn.addEventListener('click', function() {
  usr.block();
  round();
});

let shootBtn = document.createElement('button');
shootBtn.setAttribute('id', 'shoot-btn');
shootBtn.setAttribute('class', 'interface-buttons');
t = document.createTextNode('shoot');
shootBtn.appendChild(t);
shootBtn.addEventListener('click', function() {
  usr.shoot();
  round();
});

let sgBtn = document.createElement('button');
sgBtn.setAttribute('id', 'shotgun-btn');
sgBtn.setAttribute('class', 'interface-buttons');
t = document.createTextNode('shotgun');
sgBtn.appendChild(t);
sgBtn.addEventListener('click', function() {
  usr.shotgun();
  round();
});

let continueBtn = document.createElement('button');
continueBtn.setAttribute('id', 'continue-btn');
continueBtn.setAttribute('class', 'interface-buttons');
t = document.createTextNode('play again');
continueBtn.appendChild(t);
continueBtn.addEventListener('click', function() {
  buttonsMain.removeChild(continueBtn);
  newGame();
});

let textbox = document.createElement('div');
textbox.setAttribute('id', 'text-box');
textbox.setAttribute('class', 'text-boxes');

let textboxTop = document.createElement('div');
textboxTop.setAttribute('id', 'text-box-top');
textboxTop.setAttribute('class', 'text-boxes');

let textboxMiddle = document.createElement('div');
textboxMiddle.setAttribute('id', 'text-box-middle');
textboxMiddle.setAttribute('class', 'text-boxes');

let textboxBottom = document.createElement('div');
textboxBottom.setAttribute('id', 'text-box-bottom');
textboxBottom.setAttribute('class', 'text-boxes');

let usrbox = document.createElement('div');
usrbox.setAttribute('id', 'usr-box');
usrbox.setAttribute('class', 'text-boxes');

let cmpbox = document.createElement('div');
cmpbox.setAttribute('id', 'cmp-box');
cmpbox.setAttribute('class', 'text-boxes');

let messagebox = document.createElement('div');
messagebox.setAttribute('id', 'message-box');
messagebox.setAttribute('class', 'text-boxes');

let ammoUsr = document.createElement('div');
ammoUsr.setAttribute('class', 'player-ammo');

let bulletCountUsr = document.createElement('div');
bulletCountUsr.setAttribute('id', 'bullet-counter-usr');
bulletCountUsr.setAttribute('class', 'bullet-counter');

let ammoCmp = document.createElement('div');
ammoCmp.setAttribute('class', 'player-ammo');

let bulletCountCmp = document.createElement('div');
bulletCountCmp.setAttribute('id', 'bullet-counter-cmp');
bulletCountCmp.setAttribute('class', 'bullet-counter');

let msg1 = document.createElement('div');
msg1.setAttribute('id', 'msg-one');
msg1.setAttribute('class', 'msg');

let msg2 = document.createElement('div');
msg2.setAttribute('id', 'msg-two');
msg2.setAttribute('class', 'msg');

let winnerMsg = document.createElement('div');
winnerMsg.setAttribute('id', 'winner-msg');
winnerMsg.setAttribute('class', 'text-boxes');



function newGame() {

  let sb = document.getElementsByClassName('start-button')[0];
	sb.style.display = 'none';

  gameArea.appendChild(interface);

  interface.appendChild(buttonsMain);

  buttonsMain.appendChild(buttonsTop);
  buttonsMain.appendChild(buttonsBottom);

  buttonsMain.appendChild(sgBtn);
  buttonsMain.appendChild(continueBtn);

  buttonsTop.appendChild(reloadBtn);
  buttonsTop.appendChild(blockBtn);

  buttonsBottom.appendChild(shootBtn);

  buttonsTop.style.display = 'flex';
  buttonsBottom.style.display = 'flex';

  reloadBtn.style.display = 'block';
  blockBtn.style.display = 'none';
  shootBtn.style.display = 'none';

  sgBtn.style.display = 'none';
  continueBtn.style.display = 'none';

  interface.appendChild(textbox);

  textbox.appendChild(textboxTop);
  textbox.appendChild(textboxMiddle);
  textbox.appendChild(textboxBottom);

  textboxTop.appendChild(usrbox);
  textboxTop.appendChild(cmpbox);

  usrbox.appendChild(ammoUsr);
  usrbox.appendChild(bulletCountUsr);

  cmpbox.appendChild(ammoCmp);
  cmpbox.appendChild(bulletCountCmp);

  textboxMiddle.appendChild(messagebox);

  messagebox.appendChild(msg1);
  messagebox.appendChild(msg2);

  textboxBottom.appendChild(winnerMsg);


  usr = new Player('player');
  cmp = new Player('data');

  msg1.innerHTML = '';
  msg2.style.display = 'none';
  winnerMsg.style.display = 'none';

  ammoUsr.innerHTML = usr.name + ' ammo';
  bulletCountUsr.innerHTML = usr.bullets;
  ammoCmp.innerHTML = cmp.name + ' ammo';
  bulletCountCmp.innerHTML = cmp.bullets;
}

function round() {

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

  bulletCountUsr.innerHTML = usr.bullets;
  bulletCountCmp.innerHTML = cmp.bullets;

  if (isWinner() && winner.action === 'shotgun') {

    winner.action = 'takes out the shotgun';

  }

  if (cmp.action === 'clicks') {

    msg1.innerHTML = usr.name + ' ' + usr.action
    + ' while a frenzied ' + cmp.name + ' tries to fire its gun ...';

    msg2.innerHTML = '... but forgets to put a bullet in it first';

    msg2.style.display = 'block';

  }
  else if (usr.action === 'shotgun' && cmp.action === 'shotgun') {

    msg1.innerHTML = 'both players reaches for the shotgun';

    msg2.innerHTML = usr.name + ' fumbles with it while '
    + cmp.name + ' looks confused and the battle continues';

    msg2.style.display = 'block';

  }
  else {

    msg1.innerHTML = usr.name + ' ' + usr.action
    + ' while ' + cmp.name + ' ' + cmp.action;

    if (usr.action === 'shoots' && cmp.action === 'shoots') {

      msg2.innerHTML = 'both players miss their target out of shock!';

      msg2.style.display = 'block';

    }
    else {

      msg2.innerHTML = '';

      msg2.style.display = 'none';

    }
  }
  if (isWinner()) {

    if (winner.action === 'takes out the shotgun'
    && loser.action === 'shoots') {

      msg1.innerHTML = winner.name + ' ' + winner.action
      + ' while a frightned ' + loser.name + ' ' + loser.action + ' ... ';

      msg2.innerHTML =
      '... who panicked and with a shaky hand fails to aim in the right direction';

      msg2.style.display = 'block';

    }

    winnerMsg.innerHTML = 'winner is ' + winner.name;

    winnerMsg.style.display = 'flex';

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
      buttonsTop.style.display = 'none';
      buttonsBottom.style.display = 'none';
      sgBtn.style.display = 'block';
      break;
  }

  if (usr.action === 'shotgun' && cmp.action === 'shotgun') {
    buttonsTop.style.display = 'flex';
    buttonsBottom.style.display = 'flex';
    sgBtn.style.display = 'none';
  }

  if (isWinner()) {

    buttonsTop.style.display = 'none';
    buttonsBottom.style.display = 'none';
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

  let n1, n2;

	this.move = function() {

    let sameNumber = true;

    while (sameNumber) {

      if (n1 !== n2) {

        if (this.bullets === 3) {
          this.shotgun();
        }
        else {
          switch (n1) {
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

        n2 = n1;

        sameNumber = false;

      }
      else {

        n1 = parseInt((3 * Math.random()));

      }
    }
	}
}
