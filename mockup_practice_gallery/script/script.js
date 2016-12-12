(function() {
    "use strict";

    var search = document.querySelector(".button");
    var searchbarW = 0;
    var searchbarSwitcher = true;
    var searInter;

    //SEARCHBAR//
    function searchbarInter() {
        var searchbar = document.querySelector(".input");
        clearInterval(searInter);

        searInter = setInterval(function() {
            if(searchbarSwitcher) {
                searchbarW ++;
                searchbar.style.width = searchbarW + "px";

                if(searchbarW == 300) {
                    clearInterval(searInter);
                    searchbarSwitcher = false;
                }
            } else {
                searchbarW --;
                searchbar.style.width = searchbarW + "px";

                if(searchbarW == 0) {
                    clearInterval(searInter);
                    searchbarSwitcher = true;
                }
            }
            
        }, 1);
    }

    //SLIDER//
    var slide = document.querySelector(".slide");
    var slideArr = ["images/CG.jpg", "images/drop.jpg", "images/leviathan.jpg"];
    var currentSlide = 0;

    function slider() {
        setInterval(function() {
            currentSlide ++;
            slide.style.backgroundImage = 'url(' + slideArr[currentSlide] + ')';

            if(currentSlide == 2) {
                currentSlide = -1;
            }

        }, 5000);
    }

    slider();

    //SLIDEDOWN//

    search.onclick = searchbarInter;

})();