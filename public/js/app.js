console.log("Aliens.");

const subscriberForm = document.getElementById("subscriberForm");
subscriberForm.addEventListener("submit", handleSignupSubmit);

function handleSignupSubmit(event) {
  let formIsValid = true;
  const userData = {};
  const formInputs = [...subscriberForm.elements];
  event.preventDefault();
  document.querySelectorAll(".alert").forEach(alert => alert.remove());
  formInputs.forEach(input => {
    if (input.type !== "submit" && input.value === "") {
      formIsValid = false;
      input.classList.add("input-error");
    }

    if (input.type === "checkbox" && input.checked) {
      console.log(input.value);
    } else if (input.type !== "checkbox") {
      console.log(input.value);
    }
  });
}
