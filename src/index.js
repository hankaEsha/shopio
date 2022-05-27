new Splide("#promo-carousel").mount();
new Splide("#hot-tips-carousel").mount();
new Splide("#articles-carousel").mount();

document.querySelector(".navbar__menu-icon").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("menu--visible");
});

document.querySelectorAll(".category__header, .category__button").forEach((element) => {
    element.addEventListener("click", (event) => {
        event.target.closest(".category, .category").classList.toggle("category__list--visible");
    });
});
