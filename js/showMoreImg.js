/**____________________________SHOW/HIDDEN(photo)_______________________________ */


const buttonShowWorks = document.querySelector('.works__block-show');
const buttonHideWorks = document.querySelector('.works__block-hide');
const container = document.querySelector('.works__container');

for (let i = 3; i < photo.length; i++) {

   photo[i].style.display = "none";

}
buttonShowWorks.addEventListener('click', () => {
   for (let i = 3; i < photo.length; i++) {
      photo[i].style.display = "block";
   }
   buttonHideWorks.style.display = 'block';
   buttonShowWorks.style.display = 'none';
})

buttonHideWorks.addEventListener('click', () => {
   for (let i = 3; i < photo.length; i++) {
      photo[i].style.display = "none";
   }
   buttonHideWorks.style.display = 'none';
   buttonShowWorks.style.display = 'block';
})
/**____________________________SHOW/HIDDEN(photo)_______________________________ */