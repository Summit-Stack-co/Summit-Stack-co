(function () {
  "use strict";

  var form = document.getElementById("mockup-request-form");
  if (!form) return;

  var statusEl = form.querySelector("[data-form-status]");

  function setStatus(message, type) {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.classList.remove("is-success", "is-error");
    if (type) statusEl.classList.add(type);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var submitButton = form.querySelector('button[type="submit"]');
    var originalText = submitButton ? submitButton.textContent : "";
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    setStatus("Sending your request...", "");

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json"
      }
    })
      .then(function (response) {
        if (!response.ok) throw new Error("Request failed");
        form.reset();
        setStatus("Thanks — I'll review this and follow up.", "is-success");
      })
      .catch(function () {
        setStatus("Something went wrong. Please try again or email me directly.", "is-error");
      })
      .finally(function () {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }
      });
  });
})();
