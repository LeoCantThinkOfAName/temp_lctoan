(function() {
    "use strict"

    angular.module("myApp", ["ngMaterial", "ngAnimate"])
        .controller("MdCollage", ["$scope", function($scope) {
            var COLORS = ["#ffc0cb", "#ff1b8d", "#5ae2bd", "#ffd917", "#a1caff", "#b90090", "#4cec59", "#fb8508"];

            $scope.menuOpend = false;
            $scope.toggleMenu = function() {
                if($scope.menuOpend) {
                    $scope.menuOpend = false;
                } else {
                    $scope.menuOpend = true;
                }
            }

            $scope.tellSomething = function($event, tile) {
                var color = $event.currentTarget.parentNode.parentNode.style.background;
                var tweet = document.querySelector("#tweet");
                var audioTag = document.createElement("audio");
                audioTag.setAttribute("autoplay", "autoplay");
                var sourceTag = document.createElement("source");

                if(color == "rgb(255, 27, 141)") {
                    sourceTag.setAttribute("src", "sounds/1.wav");
                    audioTag.appendChild(sourceTag);
                    tweet.appendChild(audioTag);
                } else if(color == "rgb(255, 192, 203)") {
                    sourceTag.setAttribute("src", "sounds/2.wav");
                    audioTag.appendChild(sourceTag);
                    tweet.appendChild(audioTag);
                } else if(color == "rgb(255, 217, 23)") {
                    sourceTag.setAttribute("src", "sounds/3.wav");
                    audioTag.appendChild(sourceTag);
                    tweet.appendChild(audioTag);
                } else if(color == "rgb(76, 236, 89)") {
                    sourceTag.setAttribute("src", "sounds/4.wav");
                    audioTag.appendChild(sourceTag);
                    tweet.appendChild(audioTag);
                } else if(color == "rgb(161, 202, 255)") {
                    sourceTag.setAttribute("src", "sounds/5.wav");
                    audioTag.appendChild(sourceTag);
                    tweet.appendChild(audioTag);
                } else if(color == "rgb(90, 226, 189)") {
                    sourceTag.setAttribute("src", "sounds/6.wav");
                    audioTag.appendChild(sourceTag);
                    tweet.appendChild(audioTag);
                } else if(color == "rgb(251, 133, 8)") {
                    sourceTag.setAttribute("src", "sounds/7.wav");
                    audioTag.appendChild(sourceTag);
                    tweet.appendChild(audioTag);
                } else {
                    sourceTag.setAttribute("src", "sounds/8.ogg");
                    audioTag.appendChild(sourceTag);
                    tweet.appendChild(audioTag);
                }
            }

            $scope.colorTiles = (function() {
                var tiles = [];
                for (var i = 0; i < 51; i++) {
                tiles.push({
                    color: randomColor(),
                    colspan: randomSpan(),
                    rowspan: randomSpan()
                });
                }
                return tiles;
            })();

            function randomColor() {
                return COLORS[Math.floor(Math.random() * COLORS.length)];
            }

            function randomSpan() {
                var r = Math.random();
                if (r < 0.8) {
                return 1;
                } else if (r < 0.95) {
                return 2;
                } else {
                return 3;
                }
            }

        }])
})();