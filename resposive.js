document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.querySelector(".navbar"); // Ensure this class matches your HTML

    if (navBar) {
        navBar.addEventListener("click", function (event) {
            const target = event.target;

            if (target.tagName === "A" && target.hash) {
                event.preventDefault();
                const section = document.querySelector(target.hash);

                if (section) {
                    // Use scrollIntoView() if supported, else fallback to window.scrollTo()
                    if ("scrollBehavior" in document.documentElement.style) {
                        section.scrollIntoView({ behavior: "smooth" });
                    } else {
                        window.scrollTo({
                            top: section.offsetTop,
                            behavior: "smooth"
                        });
                    }
                }
            }
        });
    } else {
        console.error("Error: .navbar element not found!");
    }
});
