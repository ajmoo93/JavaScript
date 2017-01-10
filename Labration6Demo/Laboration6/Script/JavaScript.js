
var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: "FruitController",
        templateUrl: "../PartialView/Home.html"
    })
    .when('/Banan', {
        template: "<h2>Is a Yellow fruit with a good taste</h2>"
    })
    .when('/Jordgubbe', {
        template: "<h2>Swrr and nice fruid only in the summer</h2>"
    })
    .when('/Kiwi', {
        template: "<h2>A summer fruit with a green and good taste</h2>"
    })
         .when('/Citron', {
             template: "<h2>Yellow and oval fruit with a nice taste</h2>"
         })

    .otherwise({
        redirectTo: '/'
    })
});
mainApp.controller("FruitController", function ($scope) {
    $scope.people = [{ FruidName: 'Banan', Information: 'Is a Yellow fruit with a good taste' },
        { FruidName: 'Citron', Information: 'Yellow fruit for cooking' },
        { FruidName: 'Jordgubbe', Information: 'Swrr and nice fruid only in the summer.' }];

    $scope.message = "The fruits of the jungle or is it?";
});