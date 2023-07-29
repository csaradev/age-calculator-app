const yearInput = document.querySelector("#year");
const monthInput = document.querySelector("#month");
const dayInput = document.querySelector("#day");

let isValid = false;
const yearOutput = document.querySelector(".year-output");
const monthOutput = document.querySelector(".month-output");
const dayOutput = document.querySelector(".day-output");

const yearError = document.querySelector(".year-error");
const monthError = document.querySelector(".month-error");
const dayError = document.querySelector(".day-error");

const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", CalculateDate);
// Add event listeners

yearInput.addEventListener("input", (e) => {
  if (+dayInput.value > 31) {
    dayError.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
  }
  if (+dayInput.value === 0) {
    isValid = false;
    dayError.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    dayError = "";
  }
});

monthInput.addEventListener("input", (e) => {
  if (+monthInput.value > 12) {
    dayError.textContent = "Must be a valid month";
    isValid = false;
    return;
  } else {
    isValid = true;
  }
  if (+monthInput.value === 0) {
    isValid = false;
    monthError.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    monthError = "";
  }
});

yearInput.addEventListener("input", (e) => {
  if (+yearInput.value > 2023) {
    yearError.textContent = "Must be a valid year";
    isValid = false;
    return;
  } else {
    isValid = true;
  }
  if (+yearInput.value === 0) {
    isValid = false;
    yearError.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    yearError = "";
  }
});

function CalculateDate() {
  if (isValid) {
    let birthday = `${monthInput.value}/${dayInput.value}/${yearInput.value}`;
    let birthdayObj = new Date(birthday);
    let ageMill = Date.now() - birthdayObj;
    let ageDate=new Date(ageMill)
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonths = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay();
    dayOutput.textContent=ageDay;
    monthOutput.textContent=ageMonths;
    yearOutput.textContent=ageYears;

  } else {
    alert("error");
  }
}




function resetForm() {
  yearInput.value = "";
  monthInput.value = "";
  dayInput.value = "";
  yearError.textContent = "";
  monthError.textContent = "";
  dayError.textContent = "";
  yearOutput.textContent = "--";
  monthOutput.textContent = "--";
  dayOutput.textContent = "--";
}


