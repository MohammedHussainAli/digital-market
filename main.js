function redirectToPage(url) {
  window.location.href = url;
}
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml9 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml9 .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1),
  })
  .add({
    targets: ".ml9",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

//NAVIGATION

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if (window.matchMedia("screen and (max-width: 768px)").matches) {
    } else {
      document.getElementById("navbar_sub").style.top = "0";
      document.getElementById("nav_hide").style.display = "none";
    }
  } else {
    if (window.matchMedia("screen and (max-width: 768px)").matches) {
    } else {
      document.getElementById("navbar_sub").style.top = "-90px";
      document.getElementById("nav_hide").style.display = "block";
    }
  }
}

var count = 0;
function opennav() {
  if (count == 0) {
    document.getElementById("nav_hide").style.height = "240px";
    document.getElementById("icon").style.color = "#3399ff";
    count++;
  } else {
    document.getElementById("nav_hide").style.height = "55px";
    document.getElementById("icon").style.color = "#000";
    count = 0;
  }
}

//Carrousel Category
const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));

//Carrousel for trending auctions
const gap2 = 16;

const carousel2 = document.getElementById("carousel2"),
  content2 = document.getElementById("content2"),
  next2 = document.getElementById("next2"),
  prev2 = document.getElementById("prev2");

next2.addEventListener("click", (e) => {
  carousel2.scrollBy(width2 + gap, 0);
  if (carousel2.scrollWidth !== 0) {
    prev2.style.display = "flex";
  }
  if (content2.scrollWidth - width2 - gap <= carousel2.scrollLeft + width2) {
    next2.style.display = "none";
  }
});
prev2.addEventListener("click", (e) => {
  carousel2.scrollBy(-(width2 + gap), 0);
  if (carousel2.scrollLeft - width2 - gap <= 0) {
    prev2.style.display = "none";
  }
  if (!content.scrollWidth - width2 - gap <= carousel2.scrollLeft + width2) {
    next2.style.display = "flex";
  }
});

let width2 = carousel2.offsetWidth;
window.addEventListener("resize", (e) => (width2 = carousel2.offsetWidth));

//Carrousel for featured products
const gap3 = 10;

const carousel3 = document.getElementById("carousel3"),
  content3 = document.getElementById("content3"),
  next3 = document.getElementById("next3"),
  prev3 = document.getElementById("prev3");

next3.addEventListener("click", (e) => {
  carousel3.scrollBy(width3 + gap, 0);
  if (carousel3.scrollWidth !== 0) {
    prev3.style.display = "flex";
  }
  if (content3.scrollWidth - width3 - gap <= carousel3.scrollLeft + width3) {
    next3.style.display = "none";
  }
});
prev3.addEventListener("click", (e) => {
  carousel3.scrollBy(-(width3 + gap), 0);
  if (carousel3.scrollLeft - width3 - gap <= 0) {
    prev3.style.display = "none";
  }
  if (!content.scrollWidth - width3 - gap <= carousel3.scrollLeft + width3) {
    next3.style.display = "flex";
  }
});

let width3 = carousel3.offsetWidth;
window.addEventListener("resize", (e) => (width3 = carousel3.offsetWidth));
