/**____________________________Form_______________________________ */

document.addEventListener('DOMContentLoaded', () => {
   const form = document.getElementById('form');
   form.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault();
      let error = formValidate(form);
      let formData = new FormData(form);

      if (error === 0) {
         let response = await fetch('sendemail.php', {
            method: 'POST',
            body: formData
         });
         console.log(response);
         if (response.ok) {
            let result = await response.json();
            alert(result.message);
            alert('vse ok');
            form.reset();
         } else {
            alert('Ошибка');
         }
      }
   }

   function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('._req');

      for (let index = 0; index < formReq.length; index++) {
         const input = formReq[index];
         formRemoveError(input);

         if (input.classList.contains('_email')) {
            if (emailTest(input)) {
               formAddError(input);
               error++;
            }
         } else if (input.classList.contains('_phone')) {
            if (phoneTest(input)) {
               formAddError(input);
               error++;
            }
         } else {
            if (input.value === '') {
               formAddError(input);
               error++;
            }
         }
      }
      return error;
   }

   function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
   }

   function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
   }

   function emailTest(input) {
      return !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
   }

   function phoneTest(input) {
      return !/^\d[\d\(\)\ -]{4,14}\d$/.test(input.value);
   }
})

/**____________________________Form_______________________________ */