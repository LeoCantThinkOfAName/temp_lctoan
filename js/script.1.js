window.onload = window.onresize = function () {
    var nav_btn = document.querySelector("#navbar_btn");
    var navbar = document.querySelector("#navbar");
    var opacityRate = 0;
    var navUl = navbar.querySelector("#nav");
    var navItems = navbar.querySelectorAll("li");

    var navTimer = null;
    var navbarSwitcher = true;

    function showNav () {

        if (navbarSwitcher) {
            clearInterval(navTimer);
            nav.style.display = "block";

            navTimer = setInterval(function () {
                opacityRate += 0.1;
                navbar.style.background = "rgba(0,0,0," + opacityRate + ")";

                if (opacityRate >= 0.7) {
                    clearInterval(navTimer);
                    opacityRate = 0.7;
                    navbarSwitcher = false;
                }
            }, 50);
        } else {
            clearInterval(navTimer);
            navTimer = setInterval(function () {
                opacityRate -= 0.1;
                navbar.style.background = "rgba(0,0,0," + opacityRate + ")";


                if (opacityRate <= 0) {
                    clearInterval(navTimer);
                    opacityRate = 0;
                    navbarSwitcher = true;
                }
            }, 50);
        }
    }

    nav_btn.onclick = showNav;
}