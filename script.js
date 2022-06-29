const slide = document.querySelectorAll(".slide");
const arrowLeft = document.querySelectorAll(".arrow-left");
const arrowRight = document.querySelectorAll(".arrow-right");

let current = 0;

// reset all slide
const reset = () => {
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
};

// startslide
const startSlide = () => {
  reset();
  slide[0].style.display = "flex";
};

// prev arrow
const prev = () => {
  reset();
  slide[current - 1].style.display = "flex";
  current--;
};

// next arrow
const next = () => {
  reset();
  slide[current + 1].style.display = "flex";
  current++;
};

// Event btn for arrow Left
arrowLeft.forEach((arrowLeft) => {
  arrowLeft.addEventListener("click", () => {
    if (current === 0) {
      current = slide.length;
    }

    prev();
  });
});

// Event btn for arrow Right
arrowRight.forEach((arrowRight) => {
  arrowRight.addEventListener("click", () => {
    if (current === slide.length - 1) {
      current = -1;
    }

    next();
  });
});

startSlide();
