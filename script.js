// getting all the elements from the page
var ageInput = document.getElementById("age");
var genderInput = document.getElementById("gender");
var heightInput = document.getElementById("height");
var weightInput = document.getElementById("weight");
var button = document.getElementById("calculateBtn");
var infoResult = document.getElementById("infoResult");
var bmiResult = document.getElementById("bmiResult");
var bmiMessage = document.getElementById("bmiMessage");
var suggestionResult = document.getElementById("suggestionResult");
// when the button is clicked this function will run
button.addEventListener("click", function () {
  // getting the values the user typed
  var age = parseFloat(ageInput.value);
  var gender = genderInput.value;
  var heightCm = parseFloat(heightInput.value);
  var weightKg = parseFloat(weightInput.value);
  // checking if the user entered all the needed info
  if (!age || age <= 0 || !gender || !heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
    infoResult.textContent = "Info: -";
    bmiResult.textContent = "Your BMI: -";
    bmiMessage.textContent = "Category: Please fill in all fields correctly.";
    suggestionResult.textContent = "Suggestion: -";
    return;
  }
  // converting cm to meters because the bmi formula uses meters
  var heightM = heightCm / 100;
  // squaring the height
  var heightSquared = heightM * heightM;
  // bmi formula: weight divided by height squared
  var bmi = weightKg / heightSquared;
  var roundedBmi = bmi.toFixed(2);
  var category = "";
  var suggestion = "";
  // this decides which bmi range the user is in
  if (bmi < 18.5) {
    category = "Underweight";
    suggestion = "Try eating more calories and doing weight lifting.";
  } else if (bmi < 25) {
    category = "Normal weight";
    suggestion = "Keep a balanced diet and stay active.";
  } else if (bmi < 30) {
    category = "Overweight";
    suggestion = "Try to eat healthier and do more regular exercise.";
  } else {
    category = "Obese";
    suggestion = "Try to reduce calories, move more, and ask a doctor for advice if needed.";
  }
  // showing all the results on the page
  infoResult.textContent = "Info: " + gender + ", " + age + " years old";
  bmiResult.textContent = "Your BMI: " + roundedBmi;
  bmiMessage.textContent = "Category: " + category;
  suggestionResult.textContent = "Suggestion: " + suggestion;
});
