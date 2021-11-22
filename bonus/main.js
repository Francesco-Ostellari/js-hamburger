/* Hamburger menu:
mostrare / nascondere il menu principale
(per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
*/

// dichiaro la variabile per l'icona dell'hamburger menu
const iconaHamburger = document.querySelector('.fa-bars');
console.log(iconaHamburger);

// dichiaro variabile per il div contenente l'hambuger menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
console.log(hamburgerMenu);

// quando clicco sull'icona, l'hamburger menu si trasforma in display block
iconaHamburger.addEventListener('click', function () {
  hamburgerMenu.style.display = 'block';
})

// cambio colore in hover all'icona dell'hamburger menu
iconaHamburger.addEventListener('mouseover', function () {
  iconaHamburger.style.color = "magenta";
})

iconaHamburger.addEventListener('mouseout', function () {
  iconaHamburger.style.color = "gray";
})

//dichiaro variabile per l'icona che chiude l'hamburger menu
const hamburgerClose = document.querySelector('.fa-times');
console.log(hamburgerClose);

//quando clicco l'icona di chiusura del menu, l'hamburger menu diventa display none
hamburgerClose.addEventListener('click', function () {
  hamburgerMenu.style.display = 'none';
})


// cambio colore in hover all'icona della chiusura dell'hamburger menu
hamburgerClose.addEventListener('mouseover', function () {
  hamburgerClose.style.color = "magenta";
})

hamburgerClose.addEventListener('mouseout', function () {
  hamburgerClose.style.color = "white";
})

// aggiungere un'altra voce al menu usando js
const ul = document.querySelector ("ul");
const li = document.createElement ("li");
const a = document.createElement ("a");
console.log (li);
a.append("Contatti");
a.href ="#";
li.append(a);
ul.prepend(li);