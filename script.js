const form = document.querySelector("form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

function setError(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector(".message");
  //   console.log(errorMessage);
  const icon = formControl.querySelector(".icon");
  icon.style.visibility = "visible";
  formControl.classList.add("error");

  errorMessage.innerHTML = "<i>" + message + "</i>";
  errorMessage.style.visibility = "visible";
}

const validateEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

function checkInputs() {
  // trim to remove whitespaces
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const passwordValue = password.value.trim();
  const emailvalue = email.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "First Name cannot be empty");
  }

  if (lastNameValue === "") {
    setError(lastName, "Last Name cannot be empty");
  }

  if (passwordValue === "") {
    setError(password, "Password cannot be empty");
  }

  if (emailvalue === "") {
    setError(email, "Email cannot be empty");
  } else if (!validateEmail(emailvalue)) {
    console.log("email is wrong");
    setError(email, "Looks like this is not an email");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
