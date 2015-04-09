(function () {

    var app = angular.module("categoryModule");

    var EditController = function ($scope, $http) {

        $scope.message = "Edit Category";
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

        $scope.editCategory = function () {
            $scope.editForm.CategoryID = $scope.search.CategoryID;

            // Allows for unfilled fields.
            if (typeof($scope.editForm.CategoryName) == "undefined")
                $scope.editForm.CategoryName = $scope.search.CategoryName;
            if (typeof($scope.editForm.Description) == "undefined")
                $scope.editForm.Description = $scope.search.Description;

            var data = $scope.editForm;
            $http.put("http://w11a.thedistantvoice.me/api/CategoryAPI/" + $scope.search.CategoryID, data)
            .success(function (response) {
                $scope.deleteMessage = "Category updated successfully.";
            })
            .error(function (error) {
                $scope.deleteMessage = "Error: " + error;
            })
        }

    };
    app.controller("EditController", ["$scope", "$http", EditController]);

}());