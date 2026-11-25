// Small shared script: accessible mobile navigation and demo-only contact form.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "Close menu" : "Menu";
    });
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // No message is sent to a server.
      const status = document.querySelector("#form-status");
      status.textContent = "Thank you! Your demonstration inquiry has been recorded on this page only. No message was transmitted.";
      form.reset();
    });
  }
});
