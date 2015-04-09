(function () {

    var app = angular.module("categoryModule");

    var DeleteController = function ($scope, $http) {

        $scope.message = "Delete Category";
        $scope.showSearch = false;

        $scope.searchCategory = function () {
            if (typeof($scope.categoryID) == "undefined")
                return;

            $http.get("http://w11a.thedistantvoice.me/api/CategoryAPI/" + $scope.categoryID)
            .success(function (response) {
                $scope.showSearch = true;
                $scope.search = response;
                $scope.deleteMessage = "Found.";
            })
            .error(function (error) {
                $scope.deleteMessage = "Not found.";
            });
        }

        $scope.deleteCategory = function () {
            $http.delete("http://w11a.thedistantvoice.me/api/CategoryAPI/" + $scope.search.CategoryID)
            .success(function (response) {
                $scope.showSearch = false;
                $scope.deleteMessage = "Category was deleted.";
            })
            .error(function (error) {
                $scope.deleteMessage = "Error: " + error;
            });
        }

    };
    app.controller("DeleteController", ["$scope", "$http", DeleteController]);

}());