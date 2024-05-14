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

  initControlsAudio("story-3");
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

function initControlsAudio(idStory) {
  var idStorySelector = "#" + idStory;
  var idBtnPlay = idStorySelector + " #btn-play";
  var idProgressTime = idStorySelector + " .progress-time";
  var audioElm = idStorySelector + " audio";
  var idBtnPause = idStorySelector + " #btn-pause";
  var idTimeCurrent = idStorySelector + " #time--current";
  var setIntervalTime;
  $(idBtnPlay).click(() => {
    $(idBtnPlay).hide();
    $(idBtnPause).show();
    $(idProgressTime).css({
      display: "flex",
    });
    $(audioElm)[0].play();
    setIntervalTime = setInterval(() => {
      $(idTimeCurrent).html(Math.round($(audioElm)[0].currentTime));
      console.log(Math.round($(audioElm)[0].currentTime));
    }, 1000);
  });

  $(idBtnPause).click(() => {
    $(idBtnPlay).show();
    $(idBtnPause).hide();
    clearInterval(setIntervalTime);
    $(audioElm)[0].pause();
  });
}

function formatTimeAudio(time) {
  var minute = time/60;
  

  var minute = 0;

if(time < 10) {

}
}
