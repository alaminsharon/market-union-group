

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

$(function () {
    $('.al-hero-btn')
        .on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        });
});

function toggleSearch(device) {
    let searchBox, overlay;

    if (device === 'desktop') {
        searchBox = document.getElementById('fullscreen-search-desktop');
        overlay = document.getElementById('search-overlay-desktop');
    } else {
        searchBox = document.getElementById('fullscreen-search-mobile');
        overlay = document.getElementById('search-overlay-mobile');
    }

    const body = document.body;
    const isActive = searchBox.classList.contains('active');

    if (!isActive) {
        searchBox.classList.add('active');
        overlay.classList.add('active');
        body.style.overflow = 'hidden';
    } else {
        searchBox.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    }
}









