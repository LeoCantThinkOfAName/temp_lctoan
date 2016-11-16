(function() {
    "use strict";

    var winHeight = document.documentElement.clientHeight;
    var winWidth = document.documentElement.clientWidth;

    window.onresize = function() {
        var moWinWdith = document.documentElement.clientWidth;
        if(moWinWdith < 350) {
            $(".logoBoxRight").css({"height" : "50px"});
            $(".logoBoxBottom").css({"width" : "50px"});

            $(".menuBoxTop").css({"width" : "50px"});
            $(".menu").css({"height" : "48px"});
        } else if(moWinWdith <= 500 && moWinWdith >= 351) {
            $(".logoBoxRight").css({"height" : "80px"});
            $(".logoBoxBottom").css({"width" : "80px"});

            $(".menuBoxTop").css({"width" : "80px"});
            $(".menu").css({"height" : "78px"});
        } else {
            $(".logoBoxRight").css({"height" : "100px"});
            $(".logoBoxBottom").css({"width" : "100px"});

            $(".menuBoxTop").css({"width" : "100px"});
            $(".menu").css({"height" : "98px"});
        }
    }

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
        var borderAnimationEnd = false;
        var leftPlus = - winHeight;
        var bottomPlus = - winWidth;
        var rightPlus = winHeight;
        var topPlus = winWidth;
        var logoPlus = 0;
        var menuPlus = 0;

        var boxesLength = function(w) {
            if(w < 350) {
                return 50;
            } else if(w <= 500 && w >= 351) {
                return 80;
            } else {
                return 100;
            }
        }

        // border shows
        var logoInter = setInterval(function() {
            logoPlus += 2;
            $(".logoBoxRight").css({"height" : logoPlus + "px"});
            $(".logoBoxBottom").css({"width" : logoPlus + "px"});
            if(logoPlus >= boxesLength(winWidth)) {
                clearInterval(logoInter);

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

                                var menuBoxInter = setInterval(function() {
                                    menuPlus += 2;
                                    $(".menuBoxTop").css({"width" : menuPlus + "px"});
                                    $(".menu").css({"height" : menuPlus - 2 + "px"});
                                    $(".menu").css({"display" : "block"});

                                    if(menuPlus >= boxesLength(winWidth)) {
                                        clearInterval(menuBoxInter);

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
                                                        $(".menu").css({"transition" : "1.5s"});
                                                        borderAnimationEnd = true;
                                                    }
                                                });
                                            }
                                        }, 1);
                                    }
                                }, 1);
                            }
                        }, 1);
                    }
                }, 1);
            }
        }, 1);

        // menu button event
        // var menuWidth = 0;
        // var menuSwitcher = true;

        // function menuControl(num, wid) {
        //     var menuInter = setInterval(function() {
        //             menuWidth += num;
        //             $(".menu").css({"border-left" : "1px solid #FFF"});
        //             $(".menu").css({"width" : menuWidth + "px"});
        //             if(wid != 0) {
        //                 if(menuWidth >= wid) {
        //                     if(winWidth <= 500) {
        //                         $(".menu").css({"border-left" : "1px solid #1d2e44"});
        //                     }
        //                     clearInterval(menuInter);
        //                     menuSwitcher = false;
        //                 }
        //             } else {
        //                 if(menuWidth == 0) {
        //                     clearInterval(menuInter);
        //                     menuSwitcher = true;
        //                 }
        //             }
        //         }, 1);
        // }

        // $(".menuBtn").on("click", function() {
        //     if(borderAnimationEnd) {
        //         if(winWidth > 500) {
        //             if(menuSwitcher) {
        //                 menuControl(2, 300);
        //             } else {
        //                 menuControl(-2, 0);
        //             }
        //         } else {
        //            if(menuSwitcher) {
        //                if(winWidth <= 500 && winWidth >= 351) {
        //                    menuControl(2, (winWidth - 102));
        //                } else if(winWidth <= 350) {
        //                    menuControl(2, winWidth - 72);
        //                }
        //             } else {
        //                 menuControl(-2, 0);
        //             } 
        //         }
        //     }
        // });

    }

})();