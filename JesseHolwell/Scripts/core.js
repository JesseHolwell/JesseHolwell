$(function () {

    $(".headroom").headroom();

    $('a.scroll-link').click(function (event) {
        event.preventDefault();
        //do whatever
    })

    $("[id^=navbtn-]").click(function () {
        //scrollTo("#contact");

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + this.id.split("-")[1]).parent(".section").offset().top
                //$("#" + this.id.split("-")[1]).offset().top - 50
                
        }, 1500);
    })

    //$("").click(function () {
    //    return false;
    //})


})

AOS.init();