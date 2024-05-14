const form = document.querySelector('form');
form.addEventListener('submit' , function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#result');

     if (height === '' || results < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight === '' || results < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
     else{
        const heightInMeters = height/100;
        const bmi = (weight /(heightInMeters*heightInMeters)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`;
    }
});

// const form = document.querySelector('form');

// form.addEventListener('submit', function(e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);

//   const results = document.querySelector('#result');

//   if (height === '' || isNaN(height) || weight === '' || isNaN(weight)) {
//     results.innerHTML = `Please give valid height and weight.`;
//   } else {
//     // Assuming height is in centimeters, convert it to meters before calculating BMI (uncomment if needed)
//     // const heightInMeters = height / 100;
//     const bmi = (weight / (height * height)).toFixed(2); // Assuming height is already in centimeters

//     results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
//   }
// });