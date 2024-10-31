const submitButton = _("#submit-button");
const nameInput = _("#name");
const emailInput = _("#email");
const phoneInput = _("#phone");
const subjectInput = _("#subject");
const messageInput = _("#message");
const checkBox = _("#receive-letter-checkbox");
const popup = _(".popup");
const okButton = _("#ok-button");
const body = document.body;

function _(selector) {
  return document.querySelector(selector);
}

okButton.addEventListener("click", () => {
  popup.classList.remove("opened-popup");
  body.classList.remove("overflow-hidden");
});

submitButton.addEventListener("click", (e) => {
  const username = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const subject = subjectInput.value;
  const message = messageInput.value;
  const received = checkBox.checked;

  const isemail = email.includes("@");

  if (!(username.trim() && isemail && subject.trim() && message.trim())) {
    return;
  }

  e.preventDefault();

  const userData = {
    username,
    email,
    phone,
    subject,
    message,
    received,
  };

  popup.classList.add("opened-popup");
  body.classList.add("overflow-hidden");

  console.log(userData);
});
