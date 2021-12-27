$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  nav: true,
  stagePadding: 30,
  navText: [
    '<div class="d-flex align-items-center justify-content-center"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7123 2.78467L7.42464 8.07235L12.7123 13.36" stroke="#973504" stroke-width="2"/><path d="M9.2363 1.0271L2.13175 8.13165L9.2363 15.2362" stroke="#973504" stroke-width="2"/></svg></div>',
    '<div class="d-flex align-items-center justify-content-center"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.28772 2.78467L10.5754 8.07235L5.28772 13.36" stroke="#973504" stroke-width="2"/><path d="M8.76379 1.0271L15.8683 8.13165L8.76379 15.2362" stroke="#973504" stroke-width="2"/></svg></div>',
  ],
  responsive: {
    0: {
      items: 2,
      nav: true,
    },
    500: {
      items: 3,
      nav: true,
    },
    850: {
      items: 6,
      nav: true,
    },
  },
});

// Fix owl-nav disabled

$(".owl-carousel").find(".owl-nav").removeClass("disabled");
$(".owl-carousel")
  .find(".owl-nav")
  .addClass(["d-flex", "justify-content-between"]);
$(".owl-carousel").on("changed.owl.carousel", function (event) {
  $(this).find(".owl-nav").removeClass("disabled");
  $(this).find(".owl-nav").addClass(["d-flex", "justify-content-between"]);
});

$(document).ready(function () {
  $(".btn__menu").on("click", function () {
    $(".header__nav-mobile").toggleClass("active");
  });

  $('.btn-custom[data-toggle="modal"]').on("click", function () {
    let target = $(this).attr("data-target").replace("#", "");
    let myModal = new bootstrap.Modal(document.getElementById(target), {
      keyboard: false,
    });
    myModal.show($(this));
  });
});
