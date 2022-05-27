new Splide("#promo-carousel").mount();
new Splide("#hot-tips-carousel").mount();
new Splide("#articles-carousel").mount();

document.querySelector(".navbar--menu--icon").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("menu--visible");
});

document.querySelectorAll(".menu__category, .category--button").forEach((element) => {
    element.addEventListener("click", (event) => {
        event.target.closest(".menu__item, .category").classList.toggle("category__list--visible");
    });
});
