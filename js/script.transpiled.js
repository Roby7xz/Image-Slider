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
    var lastFSItemWidth = firstSlider.children().last().width() + 10;
    var lastSSItemWidth = secondSlider.children().last().width() + 10;
    firstSlider.css("transform", "translate(".concat(lastFSItemWidth, "px)"));
    secondSlider.css("transform", "translate(".concat(lastSSItemWidth, "px)"));
  });
  leftButton.on("click", function () {
    direction = false;
    var firstFSItemWidth = firstSlider.children().first().width() + 10;
    var firstSSItemWidth = secondSlider.children().first().width() + 10;
    firstSlider.css("transform", "translate(-".concat(firstFSItemWidth, "px)"));
    secondSlider.css("transform", "translate(-".concat(firstSSItemWidth, "px)"));
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
      firstSlider.append(first.hide().fadeIn(1000));
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
      secondSlider.prepend(last);
    } else {
      secondSlider.append(first.hide().fadeIn(1000));
    }
    secondSlider.css("transition", "none");
    secondSlider.css("transform", "translate(0)");
    setTimeout(function () {
      secondSlider.css("transition", "all 1s");
    });
  });
});
