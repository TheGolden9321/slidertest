"use strict";
const tabs = document.querySelectorAll('.tab');
tabs[0].style.display = "block"
const links = document.querySelectorAll('.tabs__navigation a');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        tabs.forEach(tab => {
            tab.style.display = "none";
        });
        const activeTab = document.getElementById(event.target.dataset.open);
        console.log(activeTab);
        activeTab.style.display = "block"
    })
});

let reviewSlider = new Swiper('.tab', {
    wrapperClass: "tab__sliderwrapper",
    slideClass: "tab__slide",
    slidesPerView: "auto",
    speed: 700,
    navigation:{
        prevEl: ".tab__prev",
        nextEl: ".tab__next",
    },
});

