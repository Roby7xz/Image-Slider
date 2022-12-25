$(document).ready(() => {
    const firstSlider = $(".first-slider");
    const secondSlider = $(".second-slider");

    const rightButton = $("#right");
    const leftButton = $("#left");

    const rightArrow = $("#right img");
    const leftArrow = $("#left img");

    let direction;

    rightButton.on("click", () => {
        direction = true;
        let firstItemWidth = firstSlider.children().last().width() + 10;
        let secondItemWidth = secondSlider.children().last().width() + 10;

        firstSlider.css("transform", `translate(${firstItemWidth}px)`);
        secondSlider.css("transform", `translate(${secondItemWidth}px)`);
    });

    leftButton.on("click", () => {
        direction = false;
        let firstItemWidth = firstSlider.children().first().width() + 10;
        let secondItemWidth = secondSlider.children().first().width() + 10;

        firstSlider.css("transform", `translate(-${firstItemWidth}px)`);
        secondSlider.css("transform", `translate(-${secondItemWidth}px)`);
    });

    rightButton.hover(() => {
        rightArrow.attr("src", "./assets/arrow-blue-right.png");
        rightButton.addClass("button-border");
    }, () => {
        rightArrow.attr("src", "./assets/arrow-gray-right.png");
        rightButton.removeClass("button-border");
    });

    leftButton.hover(() => {
        leftArrow.attr("src", "./assets/arrow-blue-left.png");
        leftButton.addClass("button-border");
    }, () => {
        leftArrow.attr("src", "./assets/arrow-gray-left.png");
        leftButton.removeClass("button-border");
    });

    firstSlider.on("transitionend", () => {
        let first = firstSlider.children().first();
        let last = firstSlider.children().last();

        if (direction) {
            firstSlider.prepend(last);
        } else {
            firstSlider.append(first.hide().fadeIn(1000));
        }

        firstSlider.css("transition", "none");
        firstSlider.css("transform", "translate(0)");

        setTimeout(() => {
            firstSlider.css("transition", "all 1s");
        });

    });

    secondSlider.on("transitionend", () => {
        let first = secondSlider.children().first();
        let last = secondSlider.children().last();

        if (direction) {
            secondSlider.prepend(last);
        } else {
            secondSlider.append(first.hide().fadeIn(1000));
        }

        secondSlider.css("transition", "none");
        secondSlider.css("transform", "translate(0)");

        setTimeout(() => {
            secondSlider.css("transition", "all 1s");
        });

    });
});
