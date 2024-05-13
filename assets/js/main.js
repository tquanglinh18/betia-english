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
    nextArrow: false,
  });

  $('#btn-play').click(()=> {
    $("#story-1")[0].play();
    $("#time--current").html($("#story-1")[0].currentTime)
  });

  $('#btn-pause').click(()=> {
    $("#story-1")[0].pause();
  });

  $('#btn-replay').click(()=> {
    $("#story-1")[0].pause().load().play();
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

function tabOpen(idSection, idHeaderSelected, idContentSelected) {
  var tabContent, tabHeader;
  var idHeaderSelectedQuerry = "#" + idHeaderSelected;
  var idContentSelectedQuerry = "#" + idContentSelected;

  var idAllHeaderInSection = "#" + idSection + " .tabs__header--items";
  var idAllContentsInSection = "#" + idSection + " .tabs__contents--items";
  console.log("idAllContentsInSection: ", idAllContentsInSection);
  tabContent = $(idAllContentsInSection);
  tabContent.each((index, value) => {
    $(value).hide();

    console.log("value: ", $(value));
  });

  tabHeader = $(idAllHeaderInSection);
  tabHeader.each((index, value) => {
    $(value).removeClass("tabs__header--active");
  });

  $(idHeaderSelectedQuerry).addClass("tabs__header--active");
  $(idContentSelectedQuerry).show().addClass("tabs__contents--active");
}


