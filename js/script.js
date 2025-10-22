var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});


var swiper = new Swiper(".swiper-component", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagi: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

});

var swiper = new Swiper(".swiper-product", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagi: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-second",
    prevEl: ".swiper-button-previous",
  },
});

var swiper = new Swiper(".customer-reveiw", {
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
});

// popup

let popupOverlay = document.getElementById('popupOverlay');
let input = document.getElementById('user-age');
let form = document.getElementById("formbox");
let submit = document.getElementById("submit");
let popup = document.getElementsByClassName('main-container')[0];
let ageInfo = document.getElementById('ageInfo');
let welcomePage = document.getElementById('welcomePage');
let cancel = document.getElementsByClassName('cancel')[0];
let eligible = document.getElementById('eligible');
let notvalid = document.getElementById('notvalid');

// on load 
window.addEventListener('DOMContentLoaded', () => {
  let storedAge = localStorage.getItem('user');
  if (storedAge == null) {
    popup.style.display = 'block';
    popupOverlay.classList.add('background');
    welcomePage.style.display = 'none';
  } else {
    popup.style.display = 'none';
    popupOverlay.classList.remove('background');
    welcomePage.style.display = 'none';
  }
});


form.addEventListener("submit", (event) => {
  event.preventDefault();

  let age = parseInt(input.value);

  // Clear previous messages
  notvalid.style.display = "none";
  eligible.style.display = "none";

  if (isNaN(age) || age <= 0 || age >= 101) {
    // Invalid age
    notvalid.style.display = "block";
    popup.style.display = "none";
    popupOverlay.classList.remove('background');
    setTimeout(() => {
      notvalid.style.display = "none";
      popup.style.display = "block";
    }, 2500);
  }
  else if (age >= 1 && age < 18) {
    // Underage
    eligible.style.display = "block";
    popup.style.display = "none";
    popupOverlay.classList.remove('background');
    setTimeout(() => {
      eligible.style.display = "none";
      popup.style.display = "block";
    }, 2000);
  }
  else if (age >= 18 && age < 100) {
    // Valid age – store it
    localStorage.setItem('user', JSON.stringify(age));
    popup.style.display = "none";
    popupOverlay.classList.remove('background');
    welcomePage.style.display = 'block';

    setTimeout(() => {
      welcomePage.style.display = "none";
    }, 2000);
  }

  input.value = "";
});
