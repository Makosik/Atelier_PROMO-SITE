/**____________________________SCROLL_______________________________ */

const btns = Array.prototype.slice.call(document.querySelectorAll('.nav'));
const sections = Array.prototype.slice.call(document.querySelectorAll('section'));
const arrow = document.querySelector('.arrow');
const logo = document.querySelector('.footer__logo');
const header = document.querySelector('.header');

for (const i in btns) {
   btns[i].addEventListener('click', event => {
      if (btnMenu.classList.contains('_active')) {
         body.classList.remove('_lock');
         btnMenu.classList.remove('_active');
         navBlock.classList.remove('_active');
      }
      let target = event.target;
      if (target.tagName != 'BUTTON') return;
      console.log(i);
      return handleButtonClick(sections[i])
   })
}

function handleButtonClick(e) {
   e.scrollIntoView({ block: "start", behavior: "smooth" });
}

arrow.addEventListener('click', () => {
   header.scrollIntoView({ block: "start", behavior: "smooth" });
})
logo.addEventListener('click', () => {
   header.scrollIntoView({ block: "start", behavior: "smooth" });
})
/**____________________________SCROLL_______________________________ */