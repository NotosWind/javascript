'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('pensionForm');
  const ageInput = document.getElementById('age');
  const resultArea = document.getElementById('result');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const age = Number(ageInput.value);
    const gender = form.elements['gender'].value;
    let message = '';

    if (isNaN(age) || age < 0) {
      message = 'Введите корректный возраст.';
    } else if (age >= 0 && age <= 17) {
      message = 'Вам работать ещё рано — учитесь';
    } else if ((gender === 'male' && age >= 18 && age <= 59) || (gender === 'female' && age >= 18 && age <= 54)) {
      message = 'Вам ещё работать и работать';
    } else if ((gender === 'male' && age >= 60 && age <= 64) || (gender === 'female' && age >= 55 && age <= 59)) {
      message = 'Скоро пенсия!';
    } else if ((gender === 'male' && age >= 65) || (gender === 'female' && age >= 60)) {
      message = 'Вам пора на пенсию';
    } else {
      message = 'Да кто ты такой?';
    }

    resultArea.value = message;
  });
});
