/* change navbar background on scroll */
const navBar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    const top = window.scrollY;
    navBar.classList.toggle('navbarDark', top >= 100);
});


/* Project filter field and popup window */
// Filter projects based on search
function filterProjects() {
    const searchInput = document.getElementById("projectSearch").value.toLowerCase();
    const projects = document.querySelectorAll(".project-item");

    projects.forEach(project => {
        const title = project.getAttribute("data-title").toLowerCase();
        const description = project.getAttribute("data-description").toLowerCase();
        const popupDescription = project.querySelector(".popup p").textContent.toLowerCase();

        // Check if the search input matches any of the three fields: title, description, or popup text
        if (title.includes(searchInput) || description.includes(searchInput) || popupDescription.includes(searchInput)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

// Show popup with description on hover
document.querySelectorAll(".project-item").forEach((project) => {
    const popup = project.querySelector(".popup");

    project.addEventListener("mouseenter", () => {
        popup.style.display = "block";
    });

    project.addEventListener("mouseleave", () => {
        popup.style.display = "none";
    });
});



/* Feedback form with like/dislike */
let likeCount = 0;
let dislikeCount = 0;

// Get references to buttons and display elements
const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");
const likeCountDisplay = document.getElementById("likeCount");
const dislikeCountDisplay = document.getElementById("dislikeCount");

likeBtn.addEventListener("click", () => {
    likeCount++;
    likeCountDisplay.textContent = `+${likeCount}`;
});

dislikeBtn.addEventListener("click", () => {
    dislikeCount++;
    dislikeCountDisplay.textContent = `-${dislikeCount}`;
});

// Feedback form submit 
const feedbackForm = document.getElementById("feedbackForm");
const popup = document.getElementById("popup");

feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;

    console.log("Feedback Submitted:", { name, description });

    // Clear fields after submission
    feedbackForm.reset();

    // Show the popup
    popup.style.display = "block";

    // Hide the popup after 2 seconds
    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
});

