var app = angular.module("myApp", []);

/* 1. Basic Controller */
app.controller("BasicCtrl", function ($scope) {
    $scope.message = "Hello from Basic Controller";
    $scope.greet = function () {
        alert("Welcome!");
    };
});

