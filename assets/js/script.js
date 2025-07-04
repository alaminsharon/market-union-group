

(function ($) {

    /*
        1. Header Button
        2. Mobile Menu
    */

    Fancybox.bind('[data-fancybox="gallery"]', {
        // Your custom options for a specific gallery
    });

    //1. Header Button

    $(".header_toggle_btn").on("click", function () {
        $(".mobile-menu").toggleClass("active");
    });


    //2. Mobile Menu

    $(".mobile-menu .close").on("click", function () {
        $(".mobile-menu").removeClass("active");
    });

    //3. Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });



})(jQuery)








