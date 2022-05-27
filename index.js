new Splide("#promo-carousel").mount();
new Splide("#hot-tips-carousel").mount();
new Splide("#articles-carousel").mount();

document.querySelector(".menu-icon").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("menu-visible");
});

document.querySelectorAll(".menu-category, .category-button").forEach((element) => {
    element.addEventListener("click", (event) => {
        event.target.closest(".menu-item, .category").classList.toggle("category-list-visible");
    });
});
