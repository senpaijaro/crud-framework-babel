var app = angular.module('myApp', []);
app.controller('myController', function($scope, $http, $interval) {  
    $scope.Function() = function (e){
        $http({
            method: "post",
            url: apiUrl,
            data: data
        }).then(function mySuccess (response){
            
        },function myError(response){

        });
    }
        
});

