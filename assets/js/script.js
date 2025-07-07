

(function ($) {

    /*
        1. Header Button
        2. Mobile Menu
    */

    //1. Fancy Box
    Fancybox.bind('[data-fancybox="gallery"]', {

    });


    //2. Mobile Menu
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

    //1. Header Button

    $(".header_toggle_btn").on("click", function () {
        $(".mobile-menu").toggleClass("active");
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

    //4. Scroll top button
    $(window).on("scroll", function () {
        var scrollBar = $(this).scrollTop();
        if (scrollBar > 150) {
            $(".scroll-top-btn").fadeIn();
        } else {
            $(".scroll-top-btn").fadeOut();
        }
    })
    $(".scroll-top-btn").on("click", function () {
        $("body,html").animate({
            scrollTop: 0
        });
    });

    //5. Header Sticky
    $(window).on("scroll", function () {
        var scrollBar = $(this).scrollTop();

        if (scrollBar > 150) {
            $(".header-sticky").addClass("sticky-on");
        } else {
            $(".header-sticky").removeClass("sticky-on");
        }
    });


})(jQuery)

function toggleSearch() {
    const searchBox = document.getElementById('fullscreen-search');
    const overlay = document.getElementById('search-overlay');
    const body = document.body;

    const isActive = searchBox.classList.contains('active');

    if (!isActive) {
        // Show search
        searchBox.classList.add('active');
        overlay.classList.add('active');
        body.style.overflow = 'hidden'; // Disable scroll
    } else {
        // Hide search
        searchBox.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = ''; // Restore scroll
    }
}









