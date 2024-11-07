const submitButton = _("#submit-button");
const firstNameEl = _("#first-name");
const lastNameEl = _("#last-name");
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
  const firstName = firstNameEl.value;
  const lastName = lastNameEl.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const subject = subjectInput.value;
  const message = messageInput.value;
  const received = checkBox.checked;

  const isemail = email.includes("@");

  if (
    !(
      firstName.trim() &&
      lastName.trim() &&
      isemail &&
      subject.trim() &&
      message.trim()
    )
  ) {
    return;
  }

  e.preventDefault();

  const userData = {
    firstName,
    lastName,
    email,
    phone,
    subject,
    message,
    received,
  };

  sendEmail(userData);
});

function sendEmail(userData) {
  const subject = userData.subject;
  const body = `
  First Name: ${userData.firstName}
  Last Name: ${userData.lastName}
  Email: ${userData.email}
  ${userData.phone.trim() ? `Phone: ${userData.phone}` : ""}
  Received Newsletter: ${userData.received}
  Message: ${userData.message}
  `;
  const mailtoLink = `mailto:standingdesk@company.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const link = document.createElement("a");
  link.href = mailtoLink;
  link.click();

  setTimeout(() => {
    popup.classList.add("opened-popup");
  }, 2000);
}
