
const loginForm = document.querySelector(".login-form");


loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = event.target.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  loginForm.reset();
});
