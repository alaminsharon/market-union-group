

(function ($) {

    /*
        1. Header Button
        2. Mobile Menu
    */

    Fancybox.bind('[data-fancybox="gallery"]', {
        // Your custom options for a specific gallery
    });

    $(".offcanvas_right").click(function () {
        $(".offcanvas-menu-click").animate({
            right: "0px",
        });
    });

    $(".offcanvas-menu-close").click(function () {
        $(".offcanvas-menu-click").animate({
            right: "-500px",
        });
    });
    //3. Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });



})(jQuery)








