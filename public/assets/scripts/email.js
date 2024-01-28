document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("szTb5Nn2NrBUgf7rp");

  const form = document.getElementById("contact-form");
  const button = form.querySelector("#submit");
  const inputs = form.querySelectorAll("input, textarea");

  const formMobile = document.getElementById("contact-form-mobile");
  const buttonMobile = formMobile.querySelector("#submit-mobile");
  const inputsMobile = formMobile.querySelectorAll("input, textarea");

  const invalidPopup = document.getElementById("popup-invalid");
  const confirmPopup = document.getElementById("popup-confirm");
  const errorPopup = document.getElementById("popup-confirm");

  button.addEventListener("click", () => {
    sendEmail(false)
  });

  buttonMobile.addEventListener("click", () => {
    sendEmail(false)
  });

  function sendEmail(isMobile) {
    const isFormValid = checkFormValidity(isMobile);

    if (isFormValid) {
      const formData = {
        platform: 'CV',
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      emailjs.send("service_q4pssxq", "template_zpb6wpe", formData).then(
        function () {
          displayConfirm();
        },
        function () {
          displayError();
        }
      );

      resetInputs(isMobile);
    } else {
      displayInvalid();
    }
  }

  function checkFormValidity(isMobile) {
    isValid = true;

    if (isMobile) {
      inputsMobile.forEach((input) => {
        if (!input.checkValidity()) {
          isValid = false;
        }
      });
    } else {
      inputs.forEach((input) => {
        if (!input.checkValidity()) {
          isValid = false;
        }
      });
    }
    return isValid;
  }

  function resetInputs(isMobile) {
    if (isMobile) {
      inputsMobile.forEach((input) => {
        input.value = "";
      });
    } else {
      inputs.forEach((input) => {
        input.value = "";
      });
    }
  }

  function displayConfirm() {
    confirmPopup.classList.remove("opacity-0");

    setTimeout(() => {
      confirmPopup.classList.add("opacity-0");
    }, 5000);
  }

  function displayError() {
    errorPopup.classList.remove("opacity-0");

    setTimeout(() => {
      errorPopup.classList.add("opacity-0");
    }, 5000);
  }

  function displayInvalid() {
    invalidPopup.classList.remove("opacity-0");

    setTimeout(() => {
      invalidPopup.classList.add("opacity-0");
    }, 3000);
  }
});
