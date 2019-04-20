(function() {
    angular.module('appBlog.controllers', [
            'appBlog.directives' //injecting our directives here
        ]) //controllers  will come here
        .controller('PostController', ['$scope', '$http', function($scope, $http) {
            //just injected a http service into the controller to retrieve data externally
            $http.get('data/posts.json').then((result) => {
                console.log(result)
                $scope.posts = result.data;
            }).catch((err) => {

            });
        }]) // inject another server called $routeParams to retrieve query params from urls
        .controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
            //retrieve all the posts at once and filter by id passed
            $http.get('data/posts.json').then(result => {
                $scope.post = result.data[$routeParams.id];
            });
        }])
        .controller('PagesController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
            $http.get('data/pages.json').then(result => {
                $scope.page = result.data[$routeParams.id];
            }, error => {
                console.log(error)
            })
        }])
})();