// Fade In Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".card").forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);
});
// ============================
// RESPONSIVE BANNER CONTROL
// ============================

function adjustBanner() {
    const bannerImg = document.querySelector(".banner img");
    const screenWidth = window.innerWidth;

    if (!bannerImg) return;

    if (screenWidth < 600) {
        bannerImg.style.height = "180px";
        bannerImg.style.objectFit = "cover";
    } 
    else if (screenWidth < 1024) {
        bannerImg.style.height = "300px";
        bannerImg.style.objectFit = "cover";
    } 
    else {
        bannerImg.style.height = "420px";
        bannerImg.style.objectFit = "cover";
    }
}

// Run on load
window.addEventListener("load", adjustBanner);

// Run on resize
window.addEventListener("resize", adjustBanner);
// CAROUSEL FUNCTIONALITY
document.querySelectorAll(".carousel-container").forEach(container => {
    const track = container.querySelector(".carousel-track");
    const slides = container.querySelectorAll(".carousel-item");
    const nextBtn = container.querySelector(".right");
    const prevBtn = container.querySelector(".left");

    let index = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);
});