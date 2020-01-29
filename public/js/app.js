console.log("Aliens.");

const subscriberForm = document.getElementById("subscriberForm");
subscriberForm.addEventListener("submit", handleSignupSubmit);

function handleSignupSubmit(event) {
  let formIsValid = true;
  const userData = {};
  event.preventDefault();
  document.querySelectorAll(".alert").forEach(alert => alert.remove());
  const formInputs = [...subscriberForm.elements];
  formInputs.forEach(input => {});
}
