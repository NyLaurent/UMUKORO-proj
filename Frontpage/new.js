const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidht = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];
let isDragging = false,
  startX,
  startScrollLeft,
  timeoutId;
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidht);

carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidht : firstCardWidht;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const autoPlay = () => {
  if (window.innerWidth < 800) return;
  timeoutId = setTimeout(() => {
    carousel.scrollLeft += firstCardWidht;
    autoPlay(); // Call autoPlay() again for continuous scrolling
  }, 2500);
};

autoPlay();

const infiniteScroll = () => {
  clearTimeout(timeoutId); // Clear existing timeout
  if (!wrapper.matches(":hover")) autoPlay(); // Restart autoplay if not hovering
};

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);

function randomText() {
  var text = "</> x+y=z";
  letters = text[Math.floor(Math.random() * text.length)];
  return letters;
}
function rain() {
  let cloud = document.querySelector(".cloud");
  let e = document.createElement("div");
  e.classList.add("drop");
  cloud.appendChild(e);
  let left = Math.floor(Math.random() * 290);
  let size = Math.random() * 1.5;
  let duration = Math.random() * 1;

  e.innerText = randomText();
  e.style.left = left + "px";
  e.style.fontSize = 0.5 + size + "em";
  e.style.animationDuration = 1 + duration + "s";
  setTimeout(function () {
    cloud.removeChild(e);
  }, 2000);
}
setInterval(function () {
  rain();
}, 20);
