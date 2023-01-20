const firstNameInput = document.querySelector(".js-first-name-input");
const lastNameInput = document.querySelector(".js-last-name-input");

const firstNameOutput = document.querySelector("#first-name-output");
const lastNameOutput = document.querySelector("#last-name-output");

firstNameInput.oninput = () => {
  if (firstNameInput.value === "") {
    firstNameOutput.innerHTML = " Antonio";
  } else {
    const arrayOfFirstName = firstNameInput.value.split("");
    const normalizedFirstName =
      arrayOfFirstName[0].toUpperCase() +
      arrayOfFirstName
        .splice(1, arrayOfFirstName.length)
        .join("")
        .toLowerCase();
    firstNameOutput.innerHTML = normalizedFirstName;
  }
};

lastNameInput.oninput = () => {
  if (lastNameInput.value === "") {
    lastNameOutput.innerHTML = " Banderas";
  } else {
    const arrayOfLastName = lastNameInput.value.split("");
    const normalizedLastName =
      arrayOfLastName[0].toUpperCase() +
      arrayOfLastName.splice(1, arrayOfLastName.length).join("").toLowerCase();
    lastNameOutput.innerHTML = normalizedLastName;
  }
};
