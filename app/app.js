(function() {
    angular.module('appBlog', ['ngRoute',
            'appBlog.controllers', //injecting my controllers as well

        ])
        .config(['$routeProvider', function($RouteProvide) {
            $RouteProvide.when('/', {
                    templateUrl: "views/posts.html",
                    controller: "PostController", //defines the controller to use for this route
                }).when('/posts/:id', {
                    templateUrl: 'views/singlepost.html',
                    controller: 'SinglePostController',
                }).when('/pages/:id', {
                    templateUrl: 'views/pages.html',
                    controller: 'PagesController',
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
})();
//define and create an independent controller in a js file
//provide this controller as a dependency in module section, so it can be instantiated,
//provide this controller as provider in the routing to refer the url where to launch this controller