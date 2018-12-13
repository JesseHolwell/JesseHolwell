$(function () {
    //$(".headroom").headroom();

    $("[id^=navbtn-]").click(function () {
        //scrollTo("#contact");

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + this.id.split("-")[1]).offset().top
        }, 2000);
    })
})

AOS.init();