const slideContent = document.querySelector(".slide-content");
const leftBtn = document.querySelector(".slide-button.left");
const rightBtn = document.querySelector(".slide-button.right");

slideContent.addEventListener("scroll",() => {
  const scrollLeft = slideContent.scrollLeft;
  const maxScrollLeft = slideContent.scrollWidth - slideContent.clientWidth;

  if (scrollLeft <= 5) {
    leftBtn.classList.remove("visible");
  } else {
    leftBtn.classList.add("visible");
  }
  
  if (scrollLeft >= maxScrollLeft - 5) {
    rightBtn.classList.remove("visible");
  } else {
    rightBtn.classList.add("visible");
  }
});

let swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: false,
  centerSlide: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    520: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  on: {
    slideChange: function () {
      const prevBtn = document.querySelector(".prev-container");
      const nextBtn = document.querySelector(".next-container");

      if (this.isBeginning) {
        prevBtn.style.opacity = "0";
        prevBtn.style.visibility = "hidden";
      } else {
        prevBtn.style.opacity = "1";
        prevBtn.style.visibility = "visible";
      }

      if (this.isEnd) {
        nextBtn.style.opacity = "0";
        nextBtn.style.visibility = "hidden";
      } else {
        nextBtn.style.opacity = "1";
        nextBtn.style.visibility = "visible";
      }
    },
    init: function () {
      this.emit("slideChange");
    },
  },
});

const items = document.querySelectorAll(".faq-item");

items.forEach((item) => {
  const btn = item.querySelector(".faq-question");
  btn.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    // Close all items
    items.forEach((el) => el.classList.remove("open"));

    // Toggle current
    if (!isOpen) {
      item.classList.add("open");
    }
  });
});
