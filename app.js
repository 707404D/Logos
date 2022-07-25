// menu nav

var menuNavLinks = document.getElementsByClassName("nav__link");
var i;

for (i = 0; i < menuNavLinks.length; i++) {
  menuNavLinks[i].addEventListener("click", function () {
    Array.from(menuNavLinks).forEach((item) => {
      item.classList.remove("navactivelink");
    });
    this.classList.add("navactivelink");
  });
}

$(document).ready(function () {
  $(".nav__inner").on("click", "a", function (event) {
    var id = $(this).attr("href"),
      top = $(id).position().top;
    $("body,html").animate({ scrollTop: top - 60 }, 1000);
  });
  $(".preview__subtitle").on("click", function (event) {
    var id = $(this).attr("href"),
      top = $(id).position().top;
    $("body,html").animate({ scrollTop: top - 60 }, 1000);
  });

  $(".footer__btn").on("click", function (event) {
    var id = $(this).attr("href"),
      top = $(id).position().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });
});

/* Fixed Header */
let body = $("#body");
let preview = $(".preview");

let previewH = preview.innerHeight();
let header = $(".header");

let headerH = header.innerHeight();

let prevH = headerH + previewH;
let scrollPos = $(window).scrollTop();
let menu = $(".menu");
let menuH = menu.innerHeight();

checkScroll(scrollPos, prevH);

$(window).on("scroll resize", function () {
  prevH = headerH + previewH;
  scrollPos = $(this).scrollTop();
  // let mainH = menuH + prevH;
  checkScroll(scrollPos, prevH);
  checkScrollmenu(scrollPos, menuH);
});

function checkScroll(scrollPos, prevH) {
  if (scrollPos > prevH) {
    menu.addClass("menuscrollgrad");
  } else {
    menu.removeClass("menuscrollgrad");
  }
}
function checkScrollmenu(scrollPos, menuH) {
  if (scrollPos >= 2000) {
    menu.removeClass("menuscrollgrad");
  } else {
  }
}

//  btn add to cart
var btntocart = document.querySelectorAll(".menu__btn-incart");
var i;

for (i = 0; i < btntocart.length; i++) {
  btntocart[i].addEventListener("click", function (event) {
    event.preventDefault();

    var parentglobal = this.parentNode.parentNode.parentNode;
    parentglobal.classList.add("menuactiveitem");
  });
}

// count for menu items

$(document).ready(function () {
  $(".menu__btn-minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".menu__btn-plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

//  count for cartdeliv items
let mainBody = document.querySelector("#body");
if (mainBody.classList.contains("body-cartdeliv")) {
  window.onload = function () {
    var oP = document.getElementsByClassName("cartdeliv__sum-text")[0];
    var aEm = oP.getElementsByTagName("em");
    var aStrong = oP.getElementsByTagName("strong")[0];
    var oUl = document.getElementById("list");
    var oLi = oUl.getElementsByTagName("li");
    var oStrong = oUl.getElementsByTagName("strong");
    for (var i = 0; i < oLi.length; i++) {
      fn1(oLi[i]);
    }

    function fn1(aLi) {
      var oBtn = aLi.getElementsByTagName("button");
      var oStrong = aLi.getElementsByTagName("strong")[0];
      var oEm = aLi.getElementsByTagName("em")[0];
      var oSpan = aLi.getElementsByTagName("span")[0];
      var n1 = Number(oStrong.innerHTML);
      var n2 = parseFloat(oEm.innerHTML);
      // Чтобы получить итоговую сумму, необходимо сложить все промежуточные итоги
      function fn2() {
        var sum1 = 0; // Определяем временную переменную для хранения количества добавленных частей
        var sum2 = 0; // Определяем временную переменную для хранения добавленного промежуточного итога
        var emMax = 0; // Определяем временную переменную для сравнения размера цены единицы
        for (var i = 0; i < oLi.length; i++) {
          var strongs = oLi[i].getElementsByTagName("strong")[0]; // Получаем количество всех li
          var spans = oLi[i].getElementsByTagName("span")[0]; // Получить все промежуточные итоги li
          var em = oLi[i].getElementsByTagName("em")[0]; // Получаем цену за единицу всех li
          sum1 = sum1 + Number(strongs.innerHTML);
          sum2 = sum2 + parseFloat(spans.innerHTML); // Итог - это результат сложения всех промежуточных итогов. Поскольку есть десятичные числа, используется parseFloat
          if (parseFloat(em.innerHTML) > emMax) {
            // Наибольшее отдельное значение
            emMax = parseFloat(em.innerHTML);
          }
        }
        aEm[0].innerHTML = sum1 + "";
        aEm[1].innerHTML = sum2 + "";
        aStrong.innerHTML = emMax + " ";
      }
      fn2();
      oBtn[0].onclick = function () {
        n1--;
        if (n1 < 0) {
          n1 = 0;
        }
        oStrong.innerHTML = n1;
        oSpan.innerHTML = n1 * n2 + " ";
        fn2(); // Значение после вызова суммы
      };
      oBtn[1].onclick = function () {
        n1++;
        oStrong.innerHTML = n1;
        oSpan.innerHTML = n1 * n2 + " ";
        fn2();
      };
    }
  };
}

if (mainBody.classList.contains("body-cart")) {
  $(document).ready(function () {
    $(".cartdeliv__item-btn-minus").click(function () {
      var $input = $(this).parent().find("input");
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $(".cartdeliv__item-btn-plus").click(function () {
      var $input = $(this).parent().find("input");
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });

  // cart count and sum
  // cart btn delete

  let btndelete = $(".cartdeliv__item-btn-delete");

  for (i = 0; i < btndelete.length; i++) {
    btndelete[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
}

//  cartform input count
if (mainBody.classList.contains("body-cartform")) {
  $(document).ready(function () {
    $(".cartform__when-col-btn-minus").click(function () {
      var $input = $(this).parent().find("input");
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $(".cartform__when-col-btn-plus").click(function () {
      var $input = $(this).parent().find("input");
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });

  // cartdeliv btns

  let delivBtns = $(".cartform__deliv-btn");

  for (i = 0; i < delivBtns.length; i++) {
    delivBtns[i].addEventListener("click", function (e) {
      Array.from(delivBtns).forEach((item) => {
        item.classList.remove("activedelivbtn");
      });
      this.classList.add("activedelivbtn");
    });
  }

  // cartform pay btn

  let payBtns = $(".cartform__pay-btn");

  for (i = 0; i < payBtns.length; i++) {
    payBtns[i].addEventListener("click", function (e) {
      Array.from(payBtns).forEach((item) => {
        item.classList.remove("activepaybtn");
      });
      this.classList.add("activepaybtn");
    });
  }

  let whenBtns = $(".cartform__when-btn");

  for (i = 0; i < whenBtns.length; i++) {
    whenBtns[i].addEventListener("click", function (e) {
      Array.from(whenBtns).forEach((item) => {
        item.classList.remove("activewhenbtn");
      });
      this.classList.add("activewhenbtn");
    });
  }
  let btnDeliv = document.getElementById("btnDeliv");
  btnDeliv.addEventListener("click", function () {
    let cartform = document.querySelector(".cartform__inner");
    if (cartform.classList.contains("activeout")) {
      cartform.classList.remove("activeout");
    }
  });
  let btnOut = document.getElementById("btnOut");
  btnOut.addEventListener("click", function () {
    let cartform = document.querySelector(".cartform__inner");
    cartform.classList.add("activeout");
  });

  // select restoran

  //  select

  const select = document.querySelector(".restselect");

  select.addEventListener("blur", () => selectEvent());
  select.addEventListener("click", () => selectEvent());

  selectEvent = () => {
    if (event.type == "click") {
      if (select.classList.contains("selrotate")) {
        select.classList.remove("selrotate");
      } else {
        select.classList.add("selrotate");
      }
    }
    if (event.type == "blur") {
      select.classList.remove("selrotate");
    }
  };

  // styles fo select

  $(".restselect").each(function () {
    const _this = $(this),
      selectOption = _this.find("option"),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(":selected"),
      duration = 450; // длительность анимации

    _this.hide();
    _this.wrap('<div class="restselect"></div>');
    $("<div>", {
      class: "new-select",
      text: _this.children("option:disabled").text(),
    }).insertAfter(_this);

    const selectHead = _this.next(".new-select");
    $("<div>", {
      class: "new-select__list",
    }).insertAfter(selectHead);

    const selectList = selectHead.next(".new-select__list");
    for (let i = 1; i < selectOptionLength; i++) {
      $("<span>", {
        class: "new-select__item",
        html: $("<span>", {
          text: selectOption.eq(i).text(),
        }),
      })
        .attr("href", selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find(".new-select__item");
    selectList.slideUp(0);
    selectHead.on("click", function () {
      if (!$(this).hasClass("on")) {
        $(this).addClass("on");
        selectList.slideDown(duration);

        selectItem.on("click", function () {
          let chooseItem = $(this).data("value");

          $("select").val(chooseItem).attr("selected", "selected");
          selectHead.text($(this).find("span").text());

          selectList.slideUp(duration);
          selectHead.removeClass("on");
        });
      } else {
        $(this).removeClass("on");
        selectList.slideUp(duration);
      }
    });
  });
}

const spoilers = document.querySelectorAll(".delivery__spoiler");

if (spoilers.length > 0) {
  for (let spoiler of spoilers) {
    spoiler.addEventListener("click", function () {
      spoiler.classList.toggle("activespoiler");
    });
  }
}

// footer smooth links

$(document).ready(function () {
  $(".footer__links").on("click", "a", function (event) {
    // event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top - 100 }, 1000);
  });
});

//  btn check menu

$("[data-scroll]").on("click", function (event) {
  event.preventDefault();

  let elementId = $(this).data("scroll");
  let elementOffset = $(elementId).offset().top;

  // nav.removeClass("show");

  $("html, body").animate(
    {
      scrollTop: elementOffset - 70,
    },
    700
  );
});

/* Menu Toggle */
let menuHeader = document.querySelector(".header__menu");
menuHeader.addEventListener("click", function () {
  let header = document.querySelector(".header");
  let burger = document.querySelector(".header__burger");
  header.classList.toggle("activemenu");
  burger.classList.toggle("activeburger");
});

//  menu sliders

if (menu.length > 0) {
  let menuSlider_1 = $("#menuSlider_1");

  menuSlider_1.slick({
    infinite: true,
    // centerMode: true,
    // centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,

    arrows: false,
    dots: false,
    // nextArrow: $('.combo__btn-next1'),

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 3,
          slidesToScroll: 3,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
      {
        breakpoint: 875,
        settings: {
          infinite: false,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 2,
          slidesToScroll: 2,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
      {
        breakpoint: 610,
        settings: {
          infinite: false,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
    ],
  });

  let menuSlider_2 = $("#menuSlider_2");

  menuSlider_2.slick({
    infinite: true,
    // centerMode: true,
    // centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,

    arrows: false,
    dots: false,
    // nextArrow: $('.combo__btn-next1'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 3,
          slidesToScroll: 3,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
      {
        breakpoint: 875,
        settings: {
          infinite: false,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 2,
          slidesToScroll: 2,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
      {
        breakpoint: 610,
        settings: {
          infinite: false,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
    ],
  });

  let menuSlider_3 = $("#menuSlider_3");

  menuSlider_3.slick({
    infinite: true,
    // centerMode: true,
    // centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,

    arrows: false,
    dots: false,
    // nextArrow: $('.combo__btn-next1'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 3,
          slidesToScroll: 3,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
      {
        breakpoint: 875,
        settings: {
          infinite: false,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 2,
          slidesToScroll: 2,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
      {
        breakpoint: 610,
        settings: {
          infinite: false,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
    ],
  });

  let menuSlider_4 = $("#menuSlider_4");

  menuSlider_4.slick({
    infinite: true,
    // centerMode: true,
    // centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,

    arrows: false,
    dots: false,
    // nextArrow: $('.combo__btn-next1'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 3,
          slidesToScroll: 3,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
      {
        breakpoint: 875,
        settings: {
          infinite: false,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 2,
          slidesToScroll: 2,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
      {
        breakpoint: 610,
        settings: {
          infinite: false,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
    ],
  });

  let menuNav = $("#menuNav");

  menuNav.slick({
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          infinite: false,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 8,
          slidesToScroll: 1,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
      {
        breakpoint: 989,
        settings: {
          infinite: false,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 4,
          slidesToScroll: 1,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
      {
        breakpoint: 675,
        settings: {
          infinite: false,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 3,
          slidesToScroll: 1,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
    ],
  });

  // if (menu.classList.contains("menu-itemcart")) {

  let menuSlider_itemcart = $("#menuSlider_itemcart");

  menuSlider_itemcart.slick({
    infinite: true,
    // centerMode: true,
    // centerPadding: "0px",
    slidesToShow: 4,
    adaptiveHeight: true,

    arrows: false,
    dots: false,
    // nextArrow: $('.combo__btn-next1'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 3,
          slidesToScroll: 1,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
      {
        breakpoint: 875,
        settings: {
          infinite: false,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 2,
          slidesToScroll: 2,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
      {
        breakpoint: 530,
        settings: {
          infinite: false,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
    ],
  });
}
// }

const nav = document.querySelector(".nav");
if (nav.classList.contains("nav-cartform")) {
  let menuNav = $("#menuNav");
  menuNav.slick({
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          infinite: false,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 8,
          slidesToScroll: 1,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
      {
        breakpoint: 989,
        settings: {
          infinite: false,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 4,
          slidesToScroll: 1,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
      {
        breakpoint: 675,
        settings: {
          infinite: false,
          // centerMode: true,
          // centerPadding: "0px",
          slidesToShow: 3,
          slidesToScroll: 1,
          // adaptiveHeight: true,

          arrows: false,
          dots: false,
          // nextArrow: $('.combo__btn-next1'),
        },
      },
    ],
  });
}
