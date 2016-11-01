window.onload = window.onresize = function () {
    var cH = window.innerHeight,
        cW = window.innerWidth;

    var navbar_btn = document.querySelector("#navbar_btn");
    var navbar = document.querySelector("#navbar");
    var nav = document.querySelector("#nav");
    var navLists = nav.querySelectorAll("li");
    var subNav = navLists[1].querySelector("ul");
    var navSwitcher = true;
    var navTimer = null;
    var opacityRate = 0;

    var goToTop = document.querySelector("#goToTop");
    var scrollSwitcher = true;
    var scrollTimer = null;
    var scrollNavSwitcher = true;

    var sidebar_btn = document.querySelector("#sidebarLabel");
    var sidebar = document.querySelector("#sidebarWrapper");
    var sidebarLabel = document.querySelector("#sidebarLabel");
    var sidebarSwitcher = true;

    var category = document.querySelectorAll(".category");
    var first_cate = category[0].querySelector("ul");
    var first_row = first_cate.querySelectorAll("li");
    var second_cate = category[1].querySelector("ul");
    var second_row = second_cate.querySelectorAll("li");
    var third_cate = category[2].querySelector("ul");
    var third_row = third_cate.querySelectorAll("li");
    var toggleDown_Btn = document.querySelectorAll(".toggleDown");
    var toggleDownSwitcher = true;

    var toggleDownTimer = null;
    var toggleUpTimer = null;

    ///////////////////////顯示導覽列///////////////////////
    function showNav () {

        clearInterval(navTimer);
        if(navSwitcher) {
            navSwitcher = false;
            clearInterval(navTimer);

            navTimer = setInterval(function () {
                opacityRate += 0.01;

                if(cW <= 700) {
                    nav.style.background = "rgba(0,0,0," + opacityRate + ")";
                } else {
                    nav.style.background = "";
                }

                nav.style.display = "block";
                navbar.style.background = "rgba(0,0,0," + opacityRate + ")";
                for(var i = 0; i < navLists.length; i ++) {
                    navLists[i].style.opacity = opacityRate;
                } 

                if(opacityRate >= 0.7) {
                    clearInterval(navTimer);
                }
            }, 10);
        } else {
            opacityRate = 0.7;
            navSwitcher = true;

            navTimer = setInterval(function () {
                opacityRate -= 0.01;

                if(cW <= 700) {
                    nav.style.background = "rgba(0,0,0," + opacityRate + ")";
                } else {
                    nav.style.background = "";
                }

                navbar.style.background = "rgba(0,0,0," + opacityRate + ")";
                for(var i = 0; i < navLists.length; i ++) {
                    navLists[i].style.opacity = opacityRate;
                }

                if(opacityRate <= 0) {
                    nav.style.display = "none";
                    clearInterval(navTimer);
                }
            }, 10);
        }
    }

    if(cW <= 700) {
        nav.style.background = "rgba(0,0,0,0.7)";
    } else {
        nav.style.background = "";
    }

    ///////////////////////導覽列選項亮起///////////////////////
    for(var i = 0; i < navLists.length; i ++) {
        navLists[i].onmousemove = function () {
            this.style.opacity = 1;
        }
        navLists[i].onmouseout = function () {
            this.style.opacity = 0.7;
        }
        navLists[1].onmouseover = function () {
            if(cW > 700) {
                subNav.style.display = "block";
            } else {
                subNav.style.display = "none";
            }
        }
        navLists[1].onmouseout = function () {
            subNav.style.display = "none";
            this.style.opacity = 0.7;
        }
    }

    ///////////////////////導覽列失焦消失///////////////////////
    function disableNav () {
        clearInterval(navTimer);

        navTimer = setInterval(function () {
            opacityRate -= 0.01

            nav.style.background = "";
            navbar.style.background = "";
            nav.querySelector("ul").style.display = "none";

            for(var i = 0; i < navLists.length; i ++) {
                navLists[i].style.opacity = opacityRate;
            }

            if(opacityRate < 0) {
                clearInterval(navTimer);
                nav.style.display = "none";
                navSwitcher = true;
            }
        }, 10);
        navSwitcher = true;
    };

    ///////////////////////顯示回頂端按鈕///////////////////////
    function showBtn () {
        var scrollNow = document.documentElement.scrollTop || document.body.scrollTop;
        var opacityTimer = null;
        var zero = 0;

        if(scrollNow >= Math.round(cH / 2)) {
            goToTop.style.display = "block";
            goToTop.style.opacity = 0;
            opacityTimer = setInterval(function() {
                zero += 0.1;
                goToTop.style.opacity = zero;
            }, 100);

            if(scrollNavSwitcher && cW >= 700) {
                showNav();
            }
            scrollNavSwitcher = false;
        }else {
            goToTop.style.display = "none";
            scrollNavSwitcher = true;
        }
        ///////////////////////捲動開關///////////////////////
        if (!scrollSwitcher) {
            clearInterval(scrollTimer);
        }
        scrollSwitcher = false;
    };

    ///////////////////////點擊回頂端按鈕向上捲動///////////////////////
    function scrollToTop () {
        clearInterval(scrollTimer);
        scrollTimer = setInterval(function () {
            var scrollNow = document.documentElement.scrollTop || document.body.scrollTop;
            var speedControl = Math.ceil(scrollNow / 10);
            document.documentElement.scrollTop = document.body.scrollTop = scrollNow - speedControl;

            scrollSwitcher = true;

            if(scrollNow === 0) {
                clearInterval(scrollTimer);
            }
        }, 20);
    }

    ///////////////////////顯示SIDEBAR///////////////////////
    function showSidebar () {

        clearInterval(sidebarTimer);

        if(sidebarSwitcher) {
            var sidebarTimer = null;
            var pos = -250;

            sidebarTimer = setInterval(function () {
                pos += 10;
                sidebar.style.right = pos + "px";

                if(pos === 0) {
                    clearInterval(sidebarTimer);
                    sidebarSwitcher = false;
                    sidebarLabel.innerHTML = "<p>&#xf0da;</p>";
                }
            }, 10);
        } else {
            var sidebarTimer = null;
            var pos = -2;

            sidebarTimer = setInterval(function () {
                pos -= 10;
                sidebar.style.right = pos + "px";

                if(pos === -252) {
                    clearInterval(sidebarTimer);
                    sidebarSwitcher = true;
                    sidebarLabel.innerHTML = "<p>&#xf0d9;</p>";
                }
            }, 10);
        }
    }

    ///////////////////////調適WORKS各CATEGORY初始高度///////////////////////
    first_cate.style.height = first_row[0].offsetHeight + 10 + "px";
    second_cate.style.height = second_row[0].offsetHeight + 10 + "px";
    third_cate.style.height = third_row[0].offsetHeight + 10 + "px";

    function toggleDown () {
        var thisUl = this.parentNode.querySelector("ul");
        var thisLiHeight = this.parentNode.querySelector("li").offsetHeight;
        var nums = this.parentNode.querySelectorAll("li").length;
        var rows1401 = Math.ceil(nums / 4);
        var rows1400 = Math.ceil(nums / 3);
        var rows1000 = Math.ceil(nums / 2);
        var rows700 = Math.ceil(nums / 1);

        var dynamicHeight = thisLiHeight;

        if (toggleDownSwitcher) {
            toggleDownSwitcher = false;
            this.innerHTML = "&#xf0d8;";
            toggleDownTimer = setInterval(function () {
                if (cW <= 700) {
                    if (dynamicHeight >= thisLiHeight * rows700) {
                        clearInterval(toggleDownTimer);
                    }
                    dynamicHeight += 10;
                    thisUl.style.height = dynamicHeight + "px";
                } else if (cW <= 1000) {
                    if (dynamicHeight >= thisLiHeight * rows1000) {
                        clearInterval(toggleDownTimer);
                    }
                    dynamicHeight += 10;
                    thisUl.style.height = dynamicHeight + "px";
                } else if (cW <= 1400) {
                    if (dynamicHeight >= thisLiHeight * rows1400) {
                        clearInterval(toggleDownTimer);
                    }
                    dynamicHeight += 10;
                    thisUl.style.height = dynamicHeight + "px";
                } else if (cW >= 1401) {
                    if (dynamicHeight >= thisLiHeight * rows1401) {
                        clearInterval(toggleDownTimer);
                    }
                    dynamicHeight += 10;
                    thisUl.style.height = dynamicHeight + "px";
                }
            }, 10);
        } else {
            var thisUlHeight = thisUl.offsetHeight; 
            
            clearInterval(toggleDownTimer);
            clearInterval(toggleUpTimer);
            toggleDownSwitcher = true;

            this.innerHTML = "&#xf0d7;";
            toggleUpTimer = setInterval (function () {
                if (thisUlHeight <= thisLiHeight + 10) {
                    clearInterval(toggleUpTimer);
                } else {
                    thisUlHeight -= 10;
                    thisUl.style.height = thisUlHeight + "px";
                }
            }, 10);
        }
    }

    window.onscroll = showBtn;
    goToTop.addEventListener("click", scrollToTop, true);
    navbar_btn.onclick = showNav;
    nav.addEventListener("blur", disableNav, true);
    sidebar_btn.addEventListener("click", showSidebar, true);

    for (var i = 0; i < toggleDown_Btn.length; i ++) {
        toggleDown_Btn[i].onclick = toggleDown;
    }
}