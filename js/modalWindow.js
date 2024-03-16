/**____________________________MODAL WINDOW(photo)_______________________________ */
const photo = Array.prototype.slice.call(document.querySelectorAll('.works__container > div'));
const modal = document.getElementById('myModal');
const span = document.querySelector('.close');
const modalEl = document.querySelector('.modal-Content>img');

for (const i in photo) {

   photo[i].addEventListener('click', event => {
      let target = event.target;
      if (target.className != 'works__img') return;
      modalEl.setAttribute('src', `img/${i}.jpg`);
      modal.style.display = 'flex';
      span.classList.toggle('_active');
      body.classList.toggle('_lock');
   })

}

span.onclick = function () {
   modal.style.display = 'none';
   span.classList.remove('_active');
   body.classList.remove('_lock');
}

window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = 'none';
      span.classList.remove('_active');
      body.classList.remove('_lock');
   }
}
/**____________________________MODAL WINDOW(photo)_______________________________ */