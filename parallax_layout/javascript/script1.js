$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    
    $(".logo").css({
        "transform" : "translate(-50%, " + wScroll / 2 + "%)"
    });

    $(".birds").css({
        "transform" : "translate(-50%, -" + wScroll / 8 + "%)"
    });

    if(wScroll > $(".birds-pic").offset().top - ($(window).height() / 1.5)) {
        $(".birds-pic figure").each(function(elm) {
            setTimeout(function() {
                $(".birds-pic figure img").eq(elm).addClass("is-showing");
            }, 150 * (elm + 1));
        });
    }

    if(wScroll > $(".cards").offset().top - $(window).height()) {
        var card = $(".card");
        var offset = Math.min(200, (wScroll - $(".cards").offset().top + $(window).height()) / 3);

        card[0].style.transform = "translateX(-" + offset + "px)";
        card[1].style.transform = "translateX(" + offset + "px)";
    }

});