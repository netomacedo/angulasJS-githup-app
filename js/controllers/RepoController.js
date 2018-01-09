(function(){
    var app = angular.module('myLittleApp');
    var RepoController = function($scope,githubService, $routeParams){

        var onRepo = function(data){
            //debugger;
            $scope.repo = data;
        }

        var onError = function(reason){
            $scope.error = reason;
        };

        var username = $routeParams.username;
        var reponame = $routeParams.reponame;
        

        githubService.getRepoDetails(username,reponame)
            .then(onRepo, onError);

    };

    app.controller("RepoController", RepoController);
}());