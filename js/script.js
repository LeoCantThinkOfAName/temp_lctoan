window.onload = window.onresize = function () {
    var cH = window.innerHeight,
        cW = window.innerWidth;

    var contents = document.querySelectorAll(".content");
    
    var headShot = document.querySelector("#photo");

    var blogImg = document.querySelector(".preview_img");
    var blogTxt = document.querySelector(".preview_txt");
    var worksWrapper = document.querySelector(".worksWrapper");

    var navbar_btn = document.querySelector("#navbar_btn");
    var navbar = document.querySelector("#navbar");
    var nav = document.querySelector("#nav");
    var navLists = nav.querySelectorAll("li");
    var subNav = navLists[1].querySelector("ul");
    var navSwitcher = true;
    var navTimer = null;
    var opacityRate = 0;
    var opacityTimer = null;

    var goToTop = document.querySelector("#goToTop");
    var scrollSwitcher = true;
    var scrollTimer = null;
    var scrollNavSwitcher = true;

    var moveTimer = null;

    var about = document.querySelector("#about");
    var blog = document.querySelector("#blog");
    var works = document.querySelector("#works");

    var vid = document.querySelector("#vid");

    var playback = document.querySelector(".playback")

    ///////////////////////變更每個區塊與瀏覽器畫面等高///////////////////////
    for (var i = 0; i < contents.length; i ++) {
        contents[i].style.minHeight = cH + "px";
    }
    ///////////////////////ABOUT區塊內容置中///////////////////////
    headShot.style.marginTop = Math.round((cH + cW) / 20) + "px";
    ///////////////////////BLOG區塊內容置中///////////////////////
    blogImg.style.height = Math.round(cH * 0.95) + "px";
    blogTxt.style.marginTop = (cH - blogTxt.offsetHeight) / 2 - 40 + "px";

    ///////////////////////BLOG區塊MEDIA QUERY微調///////////////////////
    if(cW < 800) {
        blogImg.style.height = "300px";
        blogTxt.style.marginTop = "0px";
        if(cW < 500) {
            blogImg.style.height = "200px";
        }
    }
    ///////////////////////WORKS區塊內容置中///////////////////////
    worksWrapper.style.marginTop = (cH / worksWrapper.offsetHeight) * 100 + "px";

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
            clearInterval(moveTimer);
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

    ///////////////////////導覽選項點擊滑動至定位///////////////////////
    function moveToSections (section) {

        clearInterval(moveTimer);

        moveTimer = setInterval(function () {
            var scrollNow = document.documentElement.scrollTop || document.body.scrollTop;
            var axisY = section.offsetTop;

            if(scrollNow < axisY) {
                var speedControl = Math.ceil((axisY - scrollNow) / 10);
                document.documentElement.scrollTop = document.body.scrollTop += speedControl;

                scrollSwitcher = true;

                if(Math.ceil(scrollNow) == axisY) {
                    clearInterval(moveTimer);
                }
            } else {
                var speedControl = Math.ceil((scrollNow - axisY) / 10);
                document.documentElement.scrollTop = document.body.scrollTop -= speedControl;

                scrollSwitcher = true;

                if(Math.ceil(scrollNow) == axisY) {
                    clearInterval(moveTimer);
                }
            }
        }, 10);
    }

    for(var i = 0 ; i < navLists.length; i ++) {
        navLists[i].onclick = function () {
            var des = this.textContent.toLowerCase();

            switch (des.charAt(0)) {
                case "a":
                    moveToSections(about);
                    break;
                case "b":
                    moveToSections(blog);
                    break;
                case "w":
                    moveToSections(works);
                    break;
            }
        }
    }

    ///////////////////////小型裝置取消影片撥放///////////////////////
    if (cW <= 700) {
        vid.innerHTML = "<video poster='images/rain_bg.png' id='bgvid'></video>";
        playback.style.display = "none";
    } else {
        vid.innerHTML = "<video poster='images/rain_bg.png' id='bgvid' autoplay loop muted><source src='videos/rain_bg.mp4'></video>";
        playback.style.display = "block";
    }

    window.onscroll = showBtn;
    goToTop.addEventListener("click", scrollToTop, true);
    navbar_btn.onclick = showNav;
}