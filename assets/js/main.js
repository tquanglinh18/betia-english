$(function () {
  $("#products__detail--banner-slick").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $("#banner-slide").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: false,
    nextArrow: false
  });
});

function showSubMenu(id) {
  var idSubmenuSelected = "#" + id + "-sub-menu";

  if ($(idSubmenuSelected).css("display") == "none") {
    $(idSubmenuSelected).show();
  } else {
    $(idSubmenuSelected).hide();
  }
}

function showMenuMobile() {
  var menuMobileElm = $(".menu-mobile");

  if ($(menuMobileElm).css("display") == "none") {
    $(menuMobileElm).show();
  } else {
    $(menuMobileElm).hide();
  }
}

function tabOpen(idHeaderSelected, idContentSelected) {
  var tabContent, tabHeader;
  var idHeaderSelectedQuerry = "#" + idHeaderSelected;
  var idContentSelectedQuerry = "#" + idContentSelected;

  tabContent = $(".tabs__contents--items");
  tabContent.each((index, value) => {
    $(value).hide();
  });

  tabHeader = $(".tabs__header--items");
  tabHeader.each((index, value) => {
    $(value).removeClass("tabs__header--active");
  });

  $(idHeaderSelectedQuerry).addClass("tabs__header--active");
  $(idContentSelectedQuerry).show().addClass("tabs__contents--active");
}
