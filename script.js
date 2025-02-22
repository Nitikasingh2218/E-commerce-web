document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelector(".list");
    const totalSlides = document.querySelectorAll(".item").length;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function updateSlide() {
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    nextButton.addEventListener("click", function () {
        index = (index + 1) % totalSlides;
        updateSlide();
    });

    prevButton.addEventListener("click", function () {
        index = (index - 1 + totalSlides) % totalSlides;
        updateSlide();
    });

    // Auto slide every 2 seconds
    setInterval(() => {
        index = (index + 1) % totalSlides;
        updateSlide();
    }, 2000);
});
