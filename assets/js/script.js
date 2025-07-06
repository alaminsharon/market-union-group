

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

    //2. Mobile Menu

    $(".mobile-menu .close").on("click", function () {
        $(".mobile-menu").removeClass("active");
    });

    $(".mobile-menu ul li.has-submenu i").each(function () {
        $(this).on("click", function () {
            $(this).siblings('ul').slideToggle();
            $(this).toggleClass("icon-rotate");
        });
    });

    $(".mobile-menu ul li.has-submenu a").each(function () {
        $(this).on("click", function () {
            $(this).siblings('ul').slideToggle();
            $(this).toggleClass("icon-rotate");
        });
    });
    
    //3. Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });



})(jQuery)








