var myApp = angular.module('myApp', []);

myApp.controller('addController', ['$scope', function($scope){
    
    //employee is a model
    
    $scope.employee = {
        fName : "bibhu",
        lName : "samal"
    };
}]);