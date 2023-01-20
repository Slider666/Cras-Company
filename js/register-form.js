const firstNameInput = document.querySelector(".js-first-name-input");
const lastNameInput = document.querySelector(".js-last-name-input");

const firstNameOutput = document.querySelector("#first-name-output");
const lastNameOutput = document.querySelector("#last-name-output");

firstNameInput.oninput = () => {
  if (firstNameInput.value === "") {
    firstNameOutput.innerHTML = " Antonio";
  } else {
    firstNameOutput.innerHTML = firstNameInput.value;
  }
};

lastNameInput.oninput = () => {
  if (lastNameInput.value === "") {
    lastNameOutput.innerHTML = " Banderas";
  } else {
    lastNameOutput.innerHTML = lastNameInput.value;
  }
};
