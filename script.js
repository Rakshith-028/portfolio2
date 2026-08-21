// Welcome message when the page loads
window.onload = function () {
    console.log("Welcome to Rakshith's Portfolio!");
};

// Contact Form Validation
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const message = document.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields.");
        return;
    }

    alert("Thank you! Your message has been submitted.");

    form.reset();
});

// Navbar Active Link
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {

        links.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });
});