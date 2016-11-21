(function() {
    'use strict';

    window.onload = function() {
        var browser = navigator.userAgent.match("Chrome" || "Safari" || "Edge" || "Firefox");

        var logoRightLength = 0;
        var logoBottomLength = 100;

        var menuLeftLength = 100;
        var menuTopLength = 0;
        
        var frameLeftLength = 100;
        var frameBottomLength = 100;
        var frameRightLength = 100;
        var frameTopLength = 100;

        var titleTop = 10;
        var titleOpacity = 0;

        var clipMove = 0;

        var clientW = document.documentElement.clientWidth;
        var clientH = document.documentElement.clientHeight;

        //disable clip if using IE//
        if(!browser) {
            $(".title h1").css({"background-image" : "url()"});
        }

        //Clip bg animation//
        setInterval(function() {
            clipMove += 0.1;
            $(".title h1").css("background-position-x", clipMove + "px");
        },1);

        //frame animation//
        var logoRightInter = setInterval(function() {
            logoRightLength += 2.5;
            $(".border-right").css("height", logoRightLength + "%");

            if(logoRightLength>= 100) {
                clearInterval(logoRightInter);
                
                var logoBottomInter = setInterval(function() {
                    logoBottomLength -= 2.5;
                    $(".border-bottom").css("left", logoBottomLength + "%")

                    if(logoBottomLength <= 0) {
                        clearInterval(logoBottomInter);

                        var frameLeftInter = setInterval(function() {
                            frameLeftLength -= Math.max(0.1, frameLeftLength * 0.03);
                            $(".frame-left").css("bottom", frameLeftLength + "%");

                            if(frameLeftLength <= 0) {
                                clearInterval(frameLeftInter);
                        
                                var frameBottomInter = setInterval(function() {
                                    frameBottomLength -= Math.max(0.1, frameBottomLength * 0.03);
                                    $(".frame-bottom").css("right", frameBottomLength + "vw");

                                    if(frameBottomLength <= 0) {
                                        clearInterval(frameBottomInter);
                                
                                        var menuLeftInter = setInterval(function() {
                                            menuLeftLength -= 2.5;
                                            $(".border-left").css("top", menuLeftLength + "%");
                                            if(menuLeftLength <= 0) {
                                                clearInterval(menuLeftInter);
                                        
                                                var menuTopInter = setInterval(function() {
                                                    menuTopLength += 2.5;
                                                    $(".border-top").css("width", menuTopLength + "%");

                                                    if(menuTopLength >= 100) {
                                                        clearInterval(menuTopInter);
                                                
                                                        var frameRightInter = setInterval(function() {
                                                            frameRightLength -= Math.max(0.1, frameRightLength * 0.03);
                                                            $(".frame-right").css("top", frameRightLength + "vh");

                                                            if(frameRightLength <= 0) {
                                                                clearInterval(frameRightInter);
                                                        
                                                                var frameTopInter = setInterval(function() {
                                                                    frameTopLength -= Math.max(0.1, frameTopLength * 0.01);
                                                                    $(".frame-top").css("left", frameTopLength + "vw");

                                                                    if(frameTopLength <= 0) {
                                                                        clearInterval(frameTopInter);
                                                                        
                                                                        var titleInter = setInterval(function() {
                                                                            titleTop += Math.min(0.5, 1 - (titleTop * 0.02));

                                                                            titleOpacity += 0.008;
                                                                            
                                                                            $(".title").css("top", titleTop + "%");
                                                                            $(".title").css("opacity", titleOpacity);

                                                                            if(titleTop >= 48) {
                                                                                clearInterval(titleInter);
                                                                                $(".menu-box label").css("display", "block");
                                                                            }

                                                                        }, 5);
                                                                    }
                                                                }, 5);
                                                            }
                                                        }, 5);
                                                    }
                                                }, 5);
                                            }
                                        }, 5);
                                    }
                                }, 5);
                            }
                        }, 5);
                    }
                }, 5);
            }
        }, 5);

        //scrollering fn//
        var x = 0;
        $("#logo").on("click", function() {enter(0)});

        $("#enter").on("click", function() {enter(100)});

        $("#about").on("click", function() {enter(100)});

        $("#works").on("click", function() {enter(200)});

        $("#contact").on("click", function() {enter(300)});

        function enter(dis) {
            var inter = setInterval(function() {
                if(x < dis) {
                    x += 2;
                    $(".scroller").css("left", -x + "vw");

                    if(x >= dis) {
                        clearInterval(inter);
                    }
                } else if(x > dis) {
                    x -= 2;
                    $(".scroller").css("left", -x + "vw");

                    if(x <= dis) {
                        clearInterval(inter);
                    }
                } else {
                    return;
                }

            },1);
        }
    }
})();