const form = document.getElementById('form');
const formInput = document.querySelector('.subscribe__input');
const formBtn = document.querySelector('.subscribe__btn');
const subscribeImg = document.querySelector('.subscribe__image');

formInput.addEventListener('input', () => {
  formInput.checkValidity() ? formBtn.classList.add('btn--active') : formBtn.classList.remove('btn--active');
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const sURL = 'https://9fm5gorw39.execute-api.ap-south-1.amazonaws.com/Prod/submitForm';
  var xhr = new XMLHttpRequest();
  xhr.open(form.method, sURL, true);
  xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  // Send the collected data as JSON
  xhr.send(JSON.stringify({"email": formInput.value}));
  xhr.onloadend = response => {
    if (response.target.status === 200) {
  	  subscribeImg.classList.add('subscribe__image--success');
  	  formBtn.classList.add('btn--success');
  	  formBtn.value = "You're on the list! 👍";
  	  formInput.disabled = true;
	  formBtn.disabled = true;
    } else {
      console.error(JSON.parse(response));
    }
  };
});