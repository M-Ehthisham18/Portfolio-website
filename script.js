const toggle = document.querySelector('.mobile-toggle');

toggle.addEventListener('click',()=>{
    document.querySelector("#menu").classList.toggle("active");
})
    
const scrollDownBtn = document.getElementById("scrollDownBtn");

    // Show the button only at the top of the page
    window.addEventListener("scroll", () => {
        if (window.scrollY > 70) {
            scrollDownBtn.classList.add("hide");
        } else {
            scrollDownBtn.classList.remove("hide");
        }
    });

    // Scroll down to a section (you can modify this part based on your page layout)
    scrollDownBtn.addEventListener("click", () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    });
