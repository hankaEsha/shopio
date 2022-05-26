new Splide("#promo-carousel").mount();
new Splide("#slider2").mount();
new Splide("#slider3").mount();

document.querySelector(".menu-icon").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("menu-visible");
})

document.querySelector("#menu-clothes").addEventListener("click", () => {
    document.querySelector("#menu-clothes-list").classList.toggle("category-list-visible");
})
document.querySelector("#menu-skis").addEventListener("click", () => {
    document.querySelector("#menu-skis-list").classList.toggle("category-list-visible");
})
document.querySelector("#menu-bikes").addEventListener("click", () => {
    document.querySelector("#menu-bikes-list").classList.toggle("category-list-visible");
})

document.querySelector("#clothes").addEventListener("click", () => {
    document.querySelector("#clothes-list").classList.toggle("category-list-visible");
})
document.querySelector("#skis").addEventListener("click", () => {
    document.querySelector("#skis-list").classList.toggle("category-list-visible");
})
document.querySelector("#bikes").addEventListener("click", () => {
    document.querySelector("#bikes-list").classList.toggle("category-list-visible");
})

