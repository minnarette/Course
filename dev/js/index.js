import "../scss/index.scss";

const nav = $(".header-nav");
const nav_opener = $(".header-nav-opener");
const nav_menu = $(".nav-menu > li > a");
const dateEl = $('.year');

const addClass = () => {
  nav_opener.on("click", e => {
    e.preventDefault();
    nav.toggleClass("header-nav-active");
    $("body").toggleClass("scroll-none");
  });

  nav_menu.on("click", e => {
    nav.removeClass("header-nav-active");
    $("body").removeClass("scroll-none");
  });
};

addClass();

$(document).ready(function() {
  $(".gallery-slider").slick({
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    dots: true,
    centerPadding: "0",
    loop: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false
        }
      }
    ]
  });
});

const setCopyrightYear = (el) => {
  const date = new Date().getFullYear();
  el[0].innerHTML = date;
}

setCopyrightYear(dateEl)
