const slides = document.querySelectorAll(".slide");
slides.forEach(slide => {
    slide.addEventListener("click", () => {
        clearActiveClasses();
        slide.classList.add("active");
    })
});
function clearActiveClasses() {
    for(const slide of slides) {
        slide.classList.remove("active");
    }
}

