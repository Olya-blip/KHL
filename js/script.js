$(function () {

    $('#owl-cards').owlCarousel({
        stagePadding: 30,
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
    });

    $(document).click(function (e) {
        if (!$(".search").is(e.target)
            && $(".search").has(e.target).length === 0
            && !$(".open-mobile-search").is(e.target)
            && $(".open-mobile-search").has(e.target).length === 0
        ) {
            $('.search, .open-mobile-search').removeClass('active');
        }
    });

    $(document).click(function (e) {
        if (!$(".select-imit").is(e.target) && $(".select-imit").has(e.target).length === 0) {
            $('.select-head').removeClass('active').siblings('.select-list').slideUp(100)
        }
    });

    $('body').on('click', '.select-head', function () {
        $(this).toggleClass('active').siblings('.select-list').slideToggle(100).parents('.select-imit').siblings('.select-imit').find('.select-head').removeClass('active').siblings('.select-list').slideUp()
    });

    $('body').on('click', '.select-item', function () {
        let val = $(this).text();
        $(this).parents('.select-list').siblings('.select-head').find('.select-head-selected').html(val);
        $('.select-head').removeClass('active').siblings('.select-list').slideUp(100);
    });


    // для ползунка
    function setRangeDate(min, max, start, finish) {
        $("#range").slider({
            range: true,
            min: min,
            max: max,
            values: [start, finish],
            slide: function (event, ui) {

            }
        });
    }
    setRangeDate(1946, 2008, 1970, 1999);

    $('.open-mobile-search, .close-search').on('click', function () {
        $('.search, .open-mobile-search').toggleClass('active'); //removeClass
    });
    $('.open-mobile-menu').on('click', function () {
        $('header .menu, .mobile-menu-overlay').addClass('active');
    });
    $('.mobile-menu-overlay, .close-mobile-menu').on('click', function () {
        $('header .menu, .mobile-menu-overlay').removeClass('active');
    });
});
