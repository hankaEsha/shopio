new Splide("#promo-carousel").mount();
new Splide("#hot-tips-carousel").mount();
new Splide("#articles-carousel").mount();

// const categoryListVisible = (screenWidth) => {
//     if (screenWidth.matches) {
//         // If media query matches
//         document.querySelector(".category").classList.add("category__list--visible");
//     } else {
//         document.querySelectorAll(".category__header, .category__button").forEach((element) => {
//             element.addEventListener("click", (event) => {
//                 event.target.closest(".category").classList.toggle("category__list--visible");
//             });
//         });
//     }
// };

// let screenWidth = window.matchMedia("(max-width: 768px)");
// categoryListVisible(screenWidth); // Call listener function at run time
// screenWidth.addEventListener(myFunction); // Attach listener function on state changes

document.querySelector(".navbar__menu-icon").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("menu--visible");
});

document.querySelectorAll(".category__header, .category__button").forEach((element) => {
    element.addEventListener("click", (event) => {
        event.target.closest(".category").classList.toggle("category__list--visible");
    });
});

