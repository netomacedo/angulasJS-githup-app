(function(){


    var app = angular.module('myLittleApp');

    var UserController = function($scope, githubService, $routeParams) {

        var resetErrorMessage = function(){
            $scope.error = "";
        };

        //HTTP request
        var userDatas = function(data){
            $scope.user = data;
            githubService.getRepos($scope.user).then(onRepos, onError);
        };

        var onRepos = function(data){
            //debugger;
            $scope.repos = data;
        }

        var onError = function(reason){
            $scope.error = "Could not fetch the user datas";
        };

        $scope.repoSortOrder = "-stargazers_count";
        $scope.username = $routeParams.username;
        githubService.getUser($scope.username).then(userDatas,onError);
        resetErrorMessage();



    };

    app.controller('UserController', UserController);
    //or
     //app.controller('MainController', MainController);
}());