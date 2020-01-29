console.log("Aliens.");

const subscriberForm = document.getElementById("subscriberForm");
subscriberForm.addEventListener("submit", handleSignupSubmit);

function checkAlpha(string) {
  return /^[a-z]+$/i.test(string);
}

function checkEmail(string) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(string);
}

/* ERROR divs need styling */

function handleSignupSubmit(event) {
  let formIsValid = true;
  const userData = {};
  const formInputs = [...subscriberForm.elements];
  event.preventDefault();
  document.querySelectorAll(".alert").forEach(alert => alert.remove());
  formInputs.forEach(input => {
    if (input.type !== "submit" && input.type !== "checkbox" && input.value === "") {
      formIsValid = false;

      input.insertAdjacentHTML('afterend', `<div class="alert ${input.id}-message">${input.placeholder} is required!</div>`);
      console.log(input.value);

    } else if(input.id === "firstName" && !checkAlpha(input.value)) {
      formIsValid = false;

      input.insertAdjacentHTML('afterend', `<div class="alert ${input.id}-message"> ${input.placeholder} cannot contain special characters or numbers</div>`);
      console.log(input.value);

    } else if(input.id === "lastName" && !checkAlpha(input.value)) {
      formIsValid = false;

      input.insertAdjacentHTML('afterend', `<div class="alert ${input.id}-message"> ${input.placeholder} cannot contain special characters or numbers</div>`);
      console.log(input.value);

    } else if(input.id === "firstName" && input.value.length <= 2) {

      formIsValid = false;
      input.insertAdjacentHTML('afterend', `<div class="alert ${input.id}-message"> ${input.placeholder} must be at least 2 characters</div>`);
      console.log(input.value);

    } else if(input.id === "lastName" && input.value.length <= 2) {

      formIsValid = false;
      input.insertAdjacentHTML('afterend', `<div class="alert ${input.id}-message"> ${input.placeholder} must be at least 2 characters</div>`);
      console.log(input.value);

    } else if(input.id === "email" && !(checkEmail(input.value))) {

      formIsValid = false;
      input.insertAdjacentHTML('afterend', `<div class="alert ${input.id}-message"> ${input.placeholder} must contain at least one @ and one period "."</div>`);
      console.log(input.value);

    }

    if(formIsValid) {
      userData[input.name] = input.value;
    }


    /*else if(input.id === "email" )*/

    // Sanity CONSOLE LOG
    // if (input.type === "checkbox" && input.checked) {
    //   console.log(input.value);
    // } else if (input.type !== "checkbox") {
    //   console.log(input.value);
    // }
  });

  console.log(userData);

  if(formIsValid) {
    fetch('/api/v1/Subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.warn(error));
  }
}
