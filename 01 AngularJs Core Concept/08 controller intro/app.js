var myApp = angular.module('myApp', []);

myApp.controller('addController', ['$scope', function($scope){
    
    
    $scope.calculate = function(fNum, sNum){
        $scope.result = parseInt(fNum) + parseInt(sNum);
    };
    
    console.log($scope)
}]);