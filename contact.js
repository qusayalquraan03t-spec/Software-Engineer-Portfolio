
(() => {

  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", (event) => {

    event.preventDefault();

    if (!form.reportValidity()) return;

    const name = document.getElementById("contact-name").value.trim();

    const email = document.getElementById("contact-email").value.trim();

    const subject = document.getElementById("contact-subject").value.trim();

    const message = document.getElementById("contact-message").value.trim();

    const body =
      `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const mailto =
      `mailto:qusayalquraan03t@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

  });

})();
