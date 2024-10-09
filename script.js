const toggle = document.querySelector('.mobile-toggle');

toggle.addEventListener('click', () => {
    document.querySelector("#menu").classList.toggle("active");
});

const scrollDownBtn = document.getElementById("scrollDownBtn");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
    // Check if the user is at the top of the page
    if (window.scrollY === 0) {
        scrollDownBtn.classList.remove("hide"); // Show button
    } else {
        scrollDownBtn.classList.add("hide"); // Hide button when scrolled down
    }
});

// Scroll down to the about-me section
scrollDownBtn.addEventListener("click", () => {
    const aboutMeSection = document.querySelector('.about-me');
    const aboutMePosition = aboutMeSection.getBoundingClientRect().top + window.scrollY; // Get absolute position

    window.scrollTo({
        top: aboutMePosition,
        behavior: "smooth",
    });
});

// Typing animation variables
const text = "About Me...";
let index = 0;
const speed = 50; // Typing speed in milliseconds
let isAnimating = false; // Flag to check if typing is in progress

function startTypingAnimation() {
    if (isAnimating) return; // Prevent multiple animations

    isAnimating = true; // Set the flag to true
    index = 0; // Reset index
    document.getElementById("typed-text").innerHTML = ""; // Clear existing text
    type(); // Start typing
}

function type() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, speed);
    } else {
        isAnimating = false; // Reset the flag when done
    }
}

window.onload = () => {
    const aboutMe = document.querySelector('.about-me');

    // Set up scroll event for about-me visibility
    window.addEventListener('scroll', () => {
        const aboutMePosition = aboutMe.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2; // Adjust to control when it appears

        if (aboutMePosition < screenPosition && !isAnimating) {
            aboutMe.classList.add('visible'); // Add the class to trigger the animation
            startTypingAnimation(); // Start typing animation when visible
        } else if (aboutMePosition > screenPosition) {
            aboutMe.classList.remove('visible'); // Remove the class if scrolling back up
        }
    });
};
