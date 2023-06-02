const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const subss = document.getElementById("submit");
const confirms = document.getElementById("confirm");
const container = document.getElementById("ctnrBox");
const dismiss = document.getElementById("dismissBtn");
const form = document.getElementById("myForm");

// INPUT FUNCTION EMAIL VALIDATION

emailInput.addEventListener("input", () => {
  if (emailInput.validity.valid || emailInput.value === "") {
    emailError.textContent = ""; // Clear error message if input is valid
  } else {
    emailError.textContent = "Valid email required!";
  }
});

// FORM BUTTON FUNTION

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission and page reload

  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const emailAdd = document.getElementById("email-add");
  const emailValue = emailInput.value;

  if (emailInput.validity.valid || emailValue === "") {
    emailError.textContent = ""; // Clear error message if input is valid or empty
    // Use the emailValue variable for further processing
    console.log(emailValue);
    emailAdd.textContent = emailValue; //CHANGE THE TEXT OF THE USER INPUT
    confirms.classList.remove("hidden");
    container.style.display = "none";
  } else {
    emailError.textContent = "Valid email required!";
  }
});

// DISMISS BUTTON FUNTION

dismiss.addEventListener("click", () => {
  confirms.classList.add("hidden");
  container.style.display = "block";
});
