var winHeight = document.documentElement.clientHeight;
var winWidth = document.documentElement.clientWidth;

window.onload = function() {
    // header title animation;
    var titleDrop = 0
    var titleOpacity = 0
    var titleBoxDropDown = setInterval(function() {
        titleDrop += Math.min(1, 0.5 - Math.abs($(".titleBox").offset().top) / 550);
        $(".titleBox").css({"top" : titleDrop + "%"});

        titleOpacity += 0.01;
        $(".titleBox").css({"opacity" : titleOpacity});

        if(titleDrop >= 35) {
            clearInterval(titleBoxDropDown);
        }
    }, 10);

    var titleBG = 0;
    var titleInter = setInterval(function() {
        titleBG += 1;
        $(".clip-text").css({"background-position-x" : titleBG + "px"});
    }, 50);
    // header border animation
    var leftPlus = - winHeight;
    var bottomPlus = - winWidth;
    var rightPlus = winHeight;
    var topPlus = winWidth;
    // left border start
    var leftInter = setInterval(function() {
        leftPlus += Math.max(0, 1 - $(".leftBorder").offset().top / 50);
        $(".leftBorder").css({"top" : leftPlus + "px"})

        if(leftPlus >= 0) {
            clearInterval(leftInter);

            // bottom border start
            var bottonInter = setInterval(function() {
                bottomPlus += Math.max(0, 1 - $(".bottomBorder").offset().left / 50);
                $(".bottomBorder").css({"left" : bottomPlus + "px"});

                if(bottomPlus >= 0) {
                    clearInterval(bottonInter);

                    // right border start
                    var rightInter = setInterval(function() {
                        rightPlus += Math.min(-1, 1 - $(".rightBorder").offset().top / 40);
                        $(".rightBorder").css({"top" : rightPlus + "px"});

                        if(rightPlus <= 0) {
                            clearInterval(rightInter);

                            // top border start
                            var topInter = setInterval(function() {
                                topPlus += Math.min(-1, 1 - $(".topBorder").offset().left / 80);
                                $(".topBorder").css({"left" : topPlus + "px"});

                                if(topPlus <= 0) {
                                    clearInterval(topInter);
                                }
                            });
                        }
                    }, 1);
                }
            }, 1);
        }
    }, 1);
}