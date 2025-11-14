const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent page refresh

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // validation
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please enter a valid height: ${height}`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please enter a valid weight: ${weight}`;
  } else {
    // BMI formula
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
  }
});
