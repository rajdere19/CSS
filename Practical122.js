var app = angular.module("myApp", []);


/* 2. Parent Controller */
app.controller("ParentCtrl", function ($scope) {
    $scope.parentData = "This data is from Parent Controller";
});

/* 2. Child Controller */
app.controller("ChildCtrl", function ($scope) {
    $scope.childData = "This data is from Child Controller";
});
