$(document).ready(() => {
    const firstSlider = $(".first-slider");
    const secondSlider = $(".second-slider");

    const rightButton = $("#right");
    const leftButton = $("#left");

    var direction;

    rightButton.on("click", () => {
        direction = true;
        let firstItemWidth = firstSlider.children().last().width();
        let secondItemWidth = secondSlider.children().first().width();

        firstSlider.css("transform", `translate(${firstItemWidth}px)`);
        secondSlider.css("transform", `translate(-${secondItemWidth}px)`);

        $("#right img").attr("src", "./assets/arrow-gray-right.png");
        rightButton.addClass("button-border");

        setTimeout(() => {
            $("#right img").attr("src", "./assets/arrow-blue-right.png");
            rightButton.removeClass("button-border");
        }, 1000);

    });

    firstSlider.on("transitionend", () => {
        let first = firstSlider.children().first();
        let last = firstSlider.children().last();

        if (direction) {
            firstSlider.prepend(last);
        } else {
            firstSlider.append(first);
        }

        firstSlider.css("transition", "none");
        firstSlider.css("transform", "translate(0)");

        setTimeout(() => {
            firstSlider.css("transition", "all 1s");
        });

    });

    leftButton.on("click", () => {
        direction = false;
        let firstItemWidth = firstSlider.children().first().width();
        let secondItemWidth = secondSlider.children().last().width();

        firstSlider.css("transform", `translate(-${firstItemWidth}px)`);
        secondSlider.css("transform", `translate(${secondItemWidth}px)`);

        $("#left img").attr("src", "./assets/arrow-gray-left.png");
        leftButton.addClass("button-border");

        setTimeout(() => {
            $("#left img").attr("src", "./assets/arrow-blue-left.png");
            leftButton.removeClass("button-border");
        }, 1000);

    });

    secondSlider.on("transitionend", () => {
        let first = secondSlider.children().first();
        let last = secondSlider.children().last();

        if (direction) {
            secondSlider.append(first);
        } else {
            secondSlider.prepend(last);
        }

        secondSlider.css("transition", "none");
        secondSlider.css("transform", "translate(0)");

        setTimeout(() => {
            secondSlider.css("transition", "all 1s");
        });

    });
});
