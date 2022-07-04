const btn = document.getElementById("btn");
const input = document.getElementById("email");
const msg = document.getElementById("msg");
const errorIcon = document.getElementById("logo-error");
const form = document.getElementById('form');

btn.addEventListener("click", () => {
  console.log("asdasd");
  if (input.value === "") {
    errorIcon.classList.remove("error-icon");
    errorIcon.classList.add("error");
    msg.innerHTML = "The field is empty! 🤨";
    msg.classList.add('text');
  } else if (emailValidator(input.value)) {
    msg.textContent = "Thank you for subscribing! 😀🙌";
    msg.classList.add('text');
    errorIcon.classList.add("error-icon");
    setTimeout(() => {
      form.submit();
    }, 3000);
  } else {
    msg.textContent = "Please provide a valid email address 🤨";
    errorIcon.classList.remove("error-icon");
    errorIcon.classList.add("error");
    msg.classList.add('text');
  }
});

const emailValidator = (email) => {
  const regex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
};
