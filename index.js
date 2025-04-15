document.addEventListener("DOMContentLoaded", function () {
  // Get form elements
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const successPopup = document.getElementById("successPopup");
  const closePopupBtn = document.querySelector(".popup-close");

  // Add event listeners
  submitBtn.addEventListener("click", validateAndSubmit);
  closePopupBtn.addEventListener("click", closePopup);

  // Close popup if clicked outside content
  window.addEventListener("click", function (event) {
    if (event.target === successPopup) {
      closePopup();
    }
  });

  function validateAndSubmit() {
    // Reset previous errors
    clearErrors();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate form
    let isValid = true;

    // Check name
    if (name === "") {
      showError("nameError", "Please enter your name");
      isValid = false;
    }

    // Check email
    if (email === "") {
      showError("emailError", "Please enter your email");
      isValid = false;
    } else if (!isValidEmail(email)) {
      showError("emailError", "Please enter a valid email address");
      isValid = false;
    }

    // Check subject
    if (subject === "") {
      showError("subjectError", "Please enter a subject");
      isValid = false;
    }

    // Check message
    if (message === "") {
      showError("messageError", "Please enter your message");
      isValid = false;
    }

    // If form is valid, show success popup
    if (isValid) {
      // Here you would typically send the form data to a server
      // For demonstration, we'll just show the success popup
      showPopup();
      contactForm.reset();
    }
  }

  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
  }

  function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((element) => {
      element.textContent = "";
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showPopup() {
    successPopup.style.display = "flex";
  }

  function closePopup() {
    successPopup.style.display = "none";
  }
});
