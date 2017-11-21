$(function() {
    /*Меняем плейсхолдер колличество на кол-во*/

    // $(window).scroll(function () {
    //     var st = $(this).scrollTop(),
    //         slowTxt = 20,
    //         slowBg = 120; // чем больше, тем медленнее
    //     $('.content-mainwin').css({
    //         "transform" : "translate(0%, " + st/slowTxt + "%",
    //         "opacity" : 1-st/400
    //     });
    //     $('.parallax-main .img-paralax').css({
    //         "transform" : "translate(0%, -" + st/slowBg + "%"
    //     });
    // });

    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });


    $('#my-menu').html($('.main-menu').html());
    $('#my-menu .button--moema').removeAttr("class");
    $('#my-menu ul').removeClass('d-flex', 'justify-content-between');
    //var  socials = $("#my-menu").data();
    $("#my-menu").mmenu({
        "extensions": [
            "fx-panels-none",
            "fx-listitems-slide",
            "fx-menu-slide",
            "effect-menu-slide"
            //"pagedim-black"
        ],
        "offCanvas": {
            "position": "left"
        },
        "navbar": {
            "title": ""
        },
        "pageScroll": true
    });

    //Если меню выезжает снизу, расчитываем размер шапки и выкатываем меню до неё
    //mmenu bagfix

    // $(".mm-menu.mm-offcanvas.mm-bottom").css('height', $(window).height() - $('.header-top').height());
    var api = $("#my-menu").data( "mmenu" );
    //   Hook into methods
    // api.bind( "open:after", function() {
    //     });

    api.bind( "open:finish", function() {
        $("#menu-btn").addClass('is-active');
        $(".mm-menu.mm-offcanvas.mm-bottom").css('height', $(window).height() - $('.header-top').height());

        //bugfix fixed menu 1-3 START
        $(window).scroll();
        $(".slick-menu-top").css({ top: $(window).scrollTop()});
    });
    api.bind( "open:start", function() {
        $(window).scroll();

        //bugfix fixed menu 2
        $(".slick-menu-top").css({ top: $(window).scrollTop() });
    });
    api.bind( "close:finish", function( $panel ) {
        $("#menu-btn").removeClass('is-active');

        //bugfix fixed menu 3 END
        $(".slick-menu-top").css({ top: 0});
    });


    /*my custom select start*/
    $(window).click(function() {
        //$('.my-select').find('ul').slideUp();//закрывать, если кликнули не по диву
    });


    $('.my-select').on('click', function () {
        //event.stopPropagation();
        if($(this).find('ul').hasClass('active')){
            $(this).find('ul').removeClass('active');
            $(this).removeClass('active');
            $(this).find('ul').slideUp();
        }
        else {
            $(this).find('ul').addClass('active');
            $(this).addClass('active');
            $(this).find('ul').slideDown();
        }
    });
    $('.my-select .opt li').on('click', function () {
        if($(this).hasClass('selected')){
            $('.my-select .opt li').removeClass('selected');
        }
        else {
            $('.my-select .opt li').removeClass('selected');
            $(this).addClass('selected');
            $(this).parent().parent().find($('.select-value')).html($(this).data().value);
        }
    });
    /*my custom select End*/

    // $('#callDate').bootstrapMaterialDatePicker({ format : 'dddd DD MMMM YYYY - HH:mm', lang : 'ru', weekStart : 1, cancelText: 'Отмена'});

});
