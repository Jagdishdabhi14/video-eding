document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const targetId = this.getAttribute("href"); // Get href from <a>
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("premier-pro").addEventListener("click", function () {
        window.location.href = "video_edit.html"; // Change this to your desired page
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("phtoshop").addEventListener("click", function () {
        window.location.href = "photo_edit.html"; // Change this to your desired page
    });
});