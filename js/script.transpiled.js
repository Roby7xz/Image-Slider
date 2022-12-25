"use strict";

$(document).ready(function () {
  var firstSlider = $(".first-slider");
  var secondSlider = $(".second-slider");
  var rightButton = $("#right");
  var leftButton = $("#left");
  var rightArrow = $("#right img");
  var leftArrow = $("#left img");
  var direction;
  rightButton.on("click", function () {
    direction = true;
    var firstItemWidth = firstSlider.children().last().width();
    var secondItemWidth = secondSlider.children().first().width();
    firstSlider.css("transform", "translate(".concat(firstItemWidth, "px)"));
    secondSlider.css("transform", "translate(-".concat(secondItemWidth, "px)"));
  });
  leftButton.on("click", function () {
    direction = false;
    var firstItemWidth = firstSlider.children().first().width();
    var secondItemWidth = secondSlider.children().last().width();
    firstSlider.css("transform", "translate(-".concat(firstItemWidth, "px)"));
    secondSlider.css("transform", "translate(".concat(secondItemWidth, "px)"));
  });
  rightButton.hover(function () {
    rightArrow.attr("src", "./assets/arrow-blue-right.png");
    rightButton.addClass("button-border");
  }, function () {
    rightArrow.attr("src", "./assets/arrow-gray-right.png");
    rightButton.removeClass("button-border");
  });
  leftButton.hover(function () {
    leftArrow.attr("src", "./assets/arrow-blue-left.png");
    leftButton.addClass("button-border");
  }, function () {
    leftArrow.attr("src", "./assets/arrow-gray-left.png");
    leftButton.removeClass("button-border");
  });
  firstSlider.on("transitionend", function () {
    var first = firstSlider.children().first();
    var last = firstSlider.children().last();
    if (direction) {
      firstSlider.prepend(last);
    } else {
      firstSlider.append(first);
    }
    firstSlider.css("transition", "none");
    firstSlider.css("transform", "translate(0)");
    setTimeout(function () {
      firstSlider.css("transition", "all 1s");
    });
  });
  secondSlider.on("transitionend", function () {
    var first = secondSlider.children().first();
    var last = secondSlider.children().last();
    if (direction) {
      secondSlider.append(first);
    } else {
      secondSlider.prepend(last);
    }
    secondSlider.css("transition", "none");
    secondSlider.css("transform", "translate(0)");
    setTimeout(function () {
      secondSlider.css("transition", "all 1s");
    });
  });
});
