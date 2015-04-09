(function () {

    var app = angular.module("categoryModule");

    var CreateController = function ($scope, $http) {

        $scope.message = "Create Categories";

        $scope.createCategory = function () {

            if (typeof($scope.createForm.CategoryName) == "undefined") {
                $scope.createMessage = "Category Name is required.";
                return;
            }

            var data = $scope.createForm;
            $http.post("http://w11a.thedistantvoice.me/api/CategoryAPI", data)
            .success(function (response) {
                $scope.createMessage = $scope.createForm.CategoryName + " was created successfully!";
            })
            .error(function (error) {
                $scope.createMessage = "ERROR: " + error;
            });
        }
    };
    app.controller("CreateController", ["$scope", "$http", CreateController]);

}());