document.addEventListener("DOMContentLoaded", () => {
    $("#accordion").accordion({
        heightStyle: "fill"
    });
    
    $("#game1-btn").on("click", function () {
        window.open("https://evgenbaranovskiy.github.io/frontend-lr7/", '_blank');
    });

    $("#game2-btn").on("click", function () {
        window.open("https://evgenbaranovskiy.github.io/frontend-lr8/", '_blank');
    });

    $("#game3-btn").on("click", function () {
        window.open("https://evgenbaranovskiy.github.io/frontend-lr9/", '_blank');
    });

    $("#game4-btn").on("click", function () {
        window.open("https://evgenbaranovskiy.github.io/frontend-lr10/", '_blank');
    });

    $(window).resize(function () {
        $('#accordion').accordion("refresh");
    });
});