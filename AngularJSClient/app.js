(function () {

    var app = angular.module("categoryModule", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/index", {
                templateUrl: "main.html",
                controller: "IndexController"
            })
            .when("/create", {
                templateUrl: "create.html",
                controller: "CreateController"
            })
            .when("/delete", {
                templateUrl: "delete.html",
                controller: "DeleteController"
            })
            .when("/edit", {
                templateUrl: "edit.html",
                controller: "EditController"
            })
            .otherwise({
              redirectTo: "/index"
            });
    });

}());