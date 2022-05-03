/**____________________________SHOW/HIDDEN(table)_______________________________ */

const tr = Array.prototype.slice.call(document.querySelectorAll('tr'));
const buttonShow = document.querySelector('.block-show');
const buttonHide = document.querySelector('.block-hide');

for (let i = 10; i < tr.length; i++) {
   tr[i].style.display = "none";
}
buttonShow.addEventListener('click', () => {
   for (let i = 10; i < tr.length; i++) {
      tr[i].style.display = "table-row";
   }
   buttonHide.style.display = 'block';
   buttonShow.style.display = 'none';
})

buttonHide.addEventListener('click', () => {
   for (let i = 10; i < tr.length; i++) {
      tr[i].style.display = "none";
   }
   buttonHide.style.display = 'none';
   buttonShow.style.display = 'block';
})

/**____________________________SHOW/HIDDEN(table)_______________________________ */
