
/**____________________________MENU-BURGER_______________________________ */

const btnMenu = document.querySelector('.header__icon');
const navBlock = document.querySelector('.navigation');
const body = document.querySelector('body');

btnMenu.addEventListener('click', () => {
   btnMenu.classList.toggle('_active');
   navBlock.classList.toggle('_active');
   body.classList.toggle('_lock');
})

/**____________________________MENU-BURGER_______________________________ */


