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

function postComment() {
    var name = document.getElementById("customerName").value || "Anonymous";
    var comment = document.getElementById("comment").value;
    if (comment.trim() === "") {
        alert("Please enter a comment.");
        return;
    }
    
    var commentBox = document.createElement("div");
    commentBox.classList.add("comment-box");
    commentBox.innerHTML = `<strong>${name}:</strong> <p>${comment}</p>`;
    
    document.getElementById("commentSection").appendChild(commentBox);
    
    document.getElementById("customerName").value = "";
    document.getElementById("comment").value = "";
}
