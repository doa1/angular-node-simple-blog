angular.module('appBlog.directives', [])
    .directive('navigationbar', [function() {
        return {
            restrict: "E", //use this directive as an element, other options are A for Attribute,C for class M comment
            templateUrl: "views/navbar.html",
            link: function($scope, iElm, iAttrs, controller) {},
            controller: ['$scope', '$http', function($scope, $http) {
                $http.get('data/pages.json').then((result) => {
                    console.log(result);
                    $scope.pages = result.data;

                }).catch((err) => {
                    console.log("ERROR:" + err)
                });
            }]
        }
    }]);