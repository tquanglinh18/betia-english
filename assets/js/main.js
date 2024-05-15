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

  // initControlsAudio("story-3");

  initActionFAQ();

  $("#card-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: "#card-nav",
    cssEase: "linear",
    infinite: true,
    prevArrow: false,
    nextArrow: false,
  });

  var cardItemNavLength = $("#card-nav > div").length;

  $("#card-nav").slick({
    slidesToShow: cardItemNavLength < 5 ? cardItemNavLength : 5,
    slidesToScroll: 1,
    asNavFor: "#card-slider",
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    adaptiveHeight: false,
  });
});

function initActionFAQ() {
  var faqContentsId = "#faq-contents";
  var faqTabContentsID = faqContentsId + " .tabs__contents--items";

  $(faqTabContentsID).each((index, value) => {
    var faqItemSelector = "#" + $(value).attr("id") + " .faq-item";
    var idTabFaq = $(value).attr("id");
    $(faqItemSelector).each((index, value) => {
      showFaqContents(idTabFaq, index + 1);
    });
  });
}

function showFaqContents(idTabFaq, indexFaq) {
  var idFaqItemSelector = "#" + idTabFaq + " #faq-item-" + indexFaq;
  var btnDropdownIc = idFaqItemSelector + " #ic_drop_faq_" + indexFaq;

  $(btnDropdownIc).click(() => {
    $(idFaqItemSelector).toggleClass(" faq-item--active");
  });
}

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
  tabContent = $(idAllContentsInSection);
  tabContent.each((index, value) => {
    $(value).hide();
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
  var idTimeToal = idStorySelector + " #time--total";

  $(idTimeToal).html($(audioElm)[0].duration.toHHMMSS());
  $(idBtnPlay).click(() => {
    $(idBtnPlay).hide();
    $(idBtnPause).show();
    $(idProgressTime).css({
      display: "flex",
    });
    $(audioElm)[0].play();
    setIntervalTime = setInterval(() => {
      $(idTimeCurrent).html(Math.round($(audioElm)[0].currentTime).toHHMMSS());
      console.log(typeof Math.round($(audioElm)[0].currentTime).toHHMMSS());
    }, 1000);
  });

  $(idBtnPause).click(() => {
    $(idBtnPlay).show();
    $(idBtnPause).hide();
    clearInterval(setIntervalTime);
    $(audioElm)[0].pause();
  });
}

Number.prototype.toHHMMSS = function () {
  var sec_num = parseInt(this, 10);
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  // if (minutes < 10) {
  //   minutes = "0" + minutes;
  // }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
};
