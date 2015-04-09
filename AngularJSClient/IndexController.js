(function () {

    var app = angular.module("categoryModule");

    var IndexController = function ($scope, $http) {

        $scope.message = "Categories";
        $scope.hideLoading = false;

        $scope.getCategories = function () {
            $http.get("http://w11a.thedistantvoice.me/api/CategoryAPI")
            .success(function (response) {
                $scope.categoryInfo = response;
                $scope.hideLoading = true;
            });
            $scope.showCategories = true;
        }
    };
    app.controller("IndexController", ["$scope", "$http",  IndexController]);

}());