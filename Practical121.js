var app = angular.module("myApp", []);

/* 1. Basic Controller */
app.controller("BasicCtrl", function ($scope) {
    $scope.name = "Raj Dere";
    $scope.rollnumber = "27";
    $scope.dept = "Computer Engineering";
     $scope.marks = "96.47%";

});




