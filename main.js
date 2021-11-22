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
