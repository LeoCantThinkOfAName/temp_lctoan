(function() {
    "use strict";

    angular.module("flickrSearcher", ["ngMaterial"])
        .controller("ListController", ["$scope", "$http", function($scope, $http) {

            $scope.results = [];
            $scope.limit = 10;
            $scope.isSearching = false;

            $scope.loadMore = function() {
                $scope.limit += 10;

                if($scope.limit == 100) {
                    var btn = document.querySelector("button");

                    btn.setAttribute("ng-disabled", true);
                    btn.setAttribute("disabled", "disabled");
                }
                
            }

            $scope.search = function() {
                var arr = [];
                var picArr = [];

                $scope.isSearching = true;

                $http({
                    method: "GET",
                    url: "https://api.flickr.com/services/rest",
                    dataType: "json",
                    params: {
                        method: "flickr.photos.search",
                        api_key: "d72616c64ff700e293fba8cad4cb5db1",
                        text: $scope.searchTerm,
                        format: "json",
                        nojsoncallback: 1
                    }
                }).success(function(data) {
                    var userArr = [];
                    picArr = data.photos.photo;

                    for(var i = 0; i < picArr.length; i ++) {

                        $http({
                            method: "GET",
                            url: "https://api.flickr.com/services/rest",
                            dataType: "json",
                            params: {
                                method: "flickr.people.getInfo",
                                api_key: "d72616c64ff700e293fba8cad4cb5db1",
                                user_id: picArr[i].owner,
                                format: "json",
                                nojsoncallback: 1
                            }
                        }).success(function(response) {
                            userArr.push(response.person);
                        
                            angular.forEach(picArr, function(pic, picIndex) {
                                pic.owner = userArr[picIndex];
                            });
                        })
                    }

                    $scope.results = picArr;
                    $scope.isSearching = false;
                    $scope.searched = true;

                }).error(function(error) {
                    console.log("Error occured:" + error);
                    $scope.isSearching = false;
                })
            }

        }])

})();