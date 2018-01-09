(function(){
    var app = angular.module('myLittleApp', ["ngRoute"]);
    app.config(function($routeProvider){
        $routeProvider
            .when("/html/main", {
                templateUrl: "/html/main.html",
                controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "/html/user.html",
                controller: "UserController"
            })
            .when("/repo/:username/:reponame", {
                templateUrl: "/html/repo.html",
                controller: "RepoController"
            })
            .otherwise({redirectTo:"/html/main"});
    });
}());