jQuery(
  (function ($) {
    "use strict";
    $(".mean-menu").meanmenu({ meanScreenWidth: "1199" });
    $(window).on("scroll", function () {
      $(window).scrollTop() >= 200
        ? $(".main-navbar-area").addClass("stickyadd")
        : $(".main-navbar-area").removeClass("stickyadd");
    });
    $("#languageButton").on("click", function (e) {
      $(".language > .menu").toggle();
      e.preventDefault();
    });
    $("#control li").on("click", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
    $(".youtube-popup").magnificPopup({
      disableOn: 320,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
    $("#searchButton").magnificPopup({
      removalDelay: 500,
      callbacks: {
        beforeOpen: function () {
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
      midClick: true,
    });
   
    $("body").append(
      "<div class='go-top'><i class='bx bx-up-arrow-alt'></i></div>"
    );
    $(window).on("scroll", function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 600) $(".go-top").addClass("active");
      if (scrolled < 600) $(".go-top").removeClass("active");
    });
    $(".go-top").on("click", function () {
      $("html, body").animate({ scrollTop: "0" }, 500);
    });
    // $("body").append(
    //   "<a href='https://themeforest.net/checkout/from_item/29217344?license=regular&support=bundle_6month&_ga=2.31512894.1095024147.1646685914-918236941.1644836235' target='_blank' class='buy-now-btn'><img src='assets/img/envato.png' alt='envato'/>Buy Now</a>"
    // );
    $("body").append(
      "<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>"
    );
    try {
      $(".filtr-container").filterizr();
    } catch (err) {}
    $(".date-select").datepicker({ format: "mm/dd/yyyy" });
    function makeTimer() {
      var endTime = new Date("September 20, 2022 17:00:00 PDT");
      var endTime = Date.parse(endTime) / 1000;
      var now = new Date();
      var now = Date.parse(now) / 1000;
      var timeLeft = endTime - now;
      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );
      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }
      $("#days").html(days + "<span>Days</span>");
      $("#hours").html(hours + "<span>Hours</span>");
      $("#minutes").html(minutes + "<span>Minutes</span>");
      $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function () {
      makeTimer();
    }, 0);
    $("select").niceSelect();
    $(".newsletter-form")
      .validator()
      .on("submit", function (event) {
        if (event.isDefaultPrevented()) {
          formErrorSub();
          submitMSGSub(false, "Please enter your email correctly.");
        } else {
          event.preventDefault();
        }
      });
    function callbackFunction(resp) {
      if (resp.result === "success") {
        formSuccessSub();
      } else {
        formErrorSub();
      }
    }
    function formSuccessSub() {
      $(".newsletter-form")[0].reset();
      submitMSGSub(true, "Thank you for subscribing!");
      setTimeout(function () {
        $("#validator-newsletter").addClass("hide");
      }, 4000);
    }
    function formErrorSub() {
      $(".newsletter-form").addClass("animated shake");
      setTimeout(function () {
        $(".newsletter-form").removeClass("animated shake");
      }, 1000);
    }
    function submitMSGSub(valid, msg) {
      if (valid) {
        var msgClasses = "validation-success";
      } else {
        var msgClasses = "validation-danger";
      }
      $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({
      url: "https://hibootstrap.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
      callback: callbackFunction,
    });
    $(window).on("load", function (e) {
      $("#loading")
        .delay(100)
        .queue(function () {
          $(this).remove();
        });
    });
  })($)
);
function setTheme(themeName) {
  localStorage.setItem("jaunt_theme", themeName);
  document.documentElement.className = themeName;
}
function toggleTheme() {
  if (localStorage.getItem("jaunt_theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}
(function () {
  if (localStorage.getItem("jaunt_theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }
})();
