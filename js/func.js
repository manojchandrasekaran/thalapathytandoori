// This is for add animation to sections
function animateFunc() {
  if (this.scrollY >= 500 && this.scrollY < 800) {
    document
      .getElementById("about-container")
      .classList.add("animate__slideInLeft");
  } else {
    document
      .getElementById("about-container")
      .classList.remove("animate__slideInLeft");
  }
  if (this.scrollY >= 1200 && this.scrollY < 2000) {
    document.getElementById("menu").classList.add("animate__slideInLeft");
  } else {
    document.getElementById("menu").classList.remove("animate__slideInLeft");
  }
}
window.addEventListener("scroll", animateFunc);

// This is for nav bar hide / show
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  if (evt) {
    evt.currentTarget.className += " active";
  }
}

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// This is for carousel animation
$(".owl-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  items: 3,
  loop: true,
  center: false,
  rewind: false,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  freeDrag: false,
  margin: 0,
  stagePadding: 0,
  merge: false,
  mergeFit: true,
  autoWidth: false,
  startPosition: 0,
  rtl: false,
  smartSpeed: 250,
  fluidSpeed: false,
  dragEndSpeed: false,

  margin: 15,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    720: {
      items: 2,
    },
    960: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },

  responsiveRefreshRate: 200,
  responsiveBaseElement: window,
  fallbackEasing: "swing",
  info: false,
  nestedItemSelector: false,
  itemElement: "div",
  stageElement: "div",
  refreshClass: "owl-refresh",
  loadedClass: "owl-loaded",
  loadingClass: "owl-loading",
  rtlClass: "owl-rtl",
  responsiveClass: "owl-responsive",
  dragClass: "owl-drag",
  itemClass: "owl-item",
  stageClass: "owl-stage",
  stageOuterClass: "owl-stage-outer",
  grabClass: "owl-grab",
  autoHeight: false,
  lazyLoad: false,
});

// Get the modal
var modal = document.getElementById("myModal");

var showMore = document.getElementById("show-more");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
showMore.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "../images/menu-card.jpg";
  captionText.innerHTML = "Menu Card";
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 1500);

$(window).resize(function () {
  var width = $(window).width();
  console.log(width);
  if (width <= 720) {
    $(".navbar").addClass("fixed-top");
  } else {
    $(".navbar").removeClass("fixed-top");
  }
});

window.onload = (event) => {
  var width = $(window).width();
  console.log(width);
  if (width <= 720) {
    $(".navbar").addClass("fixed-top");
  } else {
    $(".navbar").removeClass("fixed-top");
  }
};
window.onload = (event) => {
  var width = $(window).width();
  console.log(width);
  if (width <= 800) {
    setTimeout(function () {
      document.getElementById("welcome").classList.add("animate__pulse");
    }, 700);
    $(".navbar").addClass("fixed-top");

    document.getElementById("welcome-txt").classList.add("animate__bounce");
  } else {
    $(".navbar").removeClass("fixed-top");
  }
};
