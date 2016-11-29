$('.calendar').clndr({
  template: $('#mini-clndr-template').html(),
  daysOfTheWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  events: [
    { date: '2016-11-25', title: 'Free Practice'},
    { date: '2016-11-26', title: 'Qualify'},
    { date: '2016-11-27', title: 'Race day'}
  ],
  clickEvents: {
    click: function(target) {
      alert(target.events[0].title);
    },
    onMonthChange: function(month) {
      console.log('you just went to ' + month.format('MMMM, YYYY'));
    }
  },
  doneRendering: function() {
    console.log('this would be a fine place to attach custom event handlers.');
  },
});


// ad
$("#ad-close").on("click", function() {
    divH = 380;

    var inter = setInterval(function() {
        divH -= 5;

        $(".ad").css("height", divH + "px");

        if(divH == 0) {
            clearInterval(inter);
            $(".ad").css("display", "none");
            $(".placeholder").attr("class", "placeholder eight columns");
        }
    }, 1);
});

//resize


//clndr rwd
if(document.documentElement.clientWidth <= 600) {
    var ad = document.querySelector(".ad").style.display;
    if(ad == "none") {
        $("section .bg .container .four").css("width", "100%");
    }
}

//menu
var switcher = true;
$(".btn").on("click", function() {
    if(switcher) {
        $("header .container .menu nav ul").css("display", "block");
        switcher = false;
    } else {
        $("header .container .menu nav ul").css("display", "none");
        switcher = true;
    }
});

//change pic
window.onload = function() {
    if(document.documentElement.clientWidth <= 550) {
        $(".lg-pic").attr("src", "http://placehold.it/300x300");
    }
}

$(window).on("resize", function() {
    if(document.documentElement.clientWidth <= 550) {
        $(".lg-pic").attr("src", "http://placehold.it/300x300");
    } else {
        $(".lg-pic").attr("src", "http://placehold.it/300x600");
    }
})