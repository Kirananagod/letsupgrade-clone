document.addEventListener("DOMContentLoaded", () => {
  // Example function to dynamically load the header and footer
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  fetch("components/header.html")
    .then(response => response.text())
    .then(data => header.innerHTML = data);

  fetch("components/footer.html")
    .then(response => response.text())
    .then(data => footer.innerHTML = data);
});