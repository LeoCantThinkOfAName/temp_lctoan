(function() {
    'use strict';

    //mannequin animation
    function mannequin() {
        var mannequinWalk = ["images/1.png", "images/2.png", "images/3.png", "images/4.png"];
        var count = 0;
        var mannequinInter = setInterval(function() {
            var mann = document.querySelector(".mannequin").querySelector("img");

            mann.setAttribute("src", mannequinWalk[count]);
            count ++;

            if(count >= 4) {
                count = 0;
            }
        }, 150);
    }

    function contentControl() {
        var content = document.querySelector(".content");

        function inter(bool) {
            var interW = setInterval(function() {
                if(bool == true) {
                    content.style.display = "block"; 
                    w += 10;
                    content.style.width = w + "px";
                    if(w == 800) {
                        clearInterval(interW);
                        var interH = setInterval(function() {
                            h += 10;
                            content.style.height = h + "px";

                            if(h == 650) {
                                clearInterval(interH);
                            }
                        }, 10);
                    }
                } else {
                    w -= 10;
                    content.style.width = w + "px";
                    if(w == 650) {
                        var interH = setInterval(function() {
                            h -= 10;
                            content.style.height = h + "px";

                            if(h == 0) {
                                clearInterval(interW);
                                clearInterval(interH);
                                content.style.display = "none";
                            }
                        }, 10);
                    }

                }
            }, 10);
        }

        if(switcher) {
            inter(true, 650, 800);
            switcher = false;
        } else {
            inter(false, 0, 0);
            switcher = true;
        }
    }

    mannequin();
    var huh = document.querySelector("#huh");
    var omg = document.querySelector("#omg");
    var switcher = true;
    var w = 0;
    var h = 0;
    huh.onclick = contentControl;
    omg.onclick = contentControl;
})();