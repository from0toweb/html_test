const emailInput = document.querySelector('[type="email"]');
const passwordInput = document.querySelector('[type="password"]');
const form = document.querySelector("form");
const error = document.querySelector(".login__error");
const card = document.querySelector(".card-wrap");
const successMessage = document.querySelector(".main__message");

const validation = (e) => {
  const target = e.target;
  // eslint-disable-next-line max-len
  const regexp = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;

  if (regexp.test(target.value)) {
    target.style.border = "2px solid green";
    passwordInput.removeAttribute("disabled");
  } else {
    if (!passwordInput.getAttribute("disabled")) {
      passwordInput.setAttribute("disabled", "disabled");
    }
    target.style.border = "2px solid tomato";
  }
};

const submit = (e) => {
  e.preventDefault();
  if (!emailInput.value.trim() || !passwordInput.value.trim()) {
    error.style.display = "block";
  } else {
    form.reset();
    error.style.display = "none";
    card.classList.add("card-wrap--success");
    const timer = setTimeout(() => {
      card.style.display = "none";
      successMessage.style.display = "block";
      clearTimeout(timer);
    }, 600);
  }
};
emailInput.addEventListener("focus", validation);
emailInput.addEventListener("input", validation);
form.addEventListener("submit", submit);
