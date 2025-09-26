document.querySelector("form").addEventListener("submit", function(e) {
    let username = document.querySelector("[name='username']").value.trim();
    let email = document.querySelector("[name='email']").value.trim();
    let password = document.querySelector("[name='password']").value.trim();
    let errorBox = document.createElement("div");
    errorBox.style.color = "red";
    errorBox.style.marginBottom = "10px";

    let messages = [];

    if (username === "") {
        messages.push("Username cannot be empty");
    }

    if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        messages.push("Enter a valid email");
    }

    if (password.length < 6) {
        messages.push("Password must be at least 6 characters");
    }

    if (messages.length > 0) {
        e.preventDefault(); // stop form submit
        errorBox.innerHTML = messages.join("<br>");
        let container = document.querySelector(".signup-container");
        let existing = container.querySelector(".client-error");
        if (existing) existing.remove();
        errorBox.classList.add("client-error");
        container.insertBefore(errorBox, container.firstChild);
    }
});
