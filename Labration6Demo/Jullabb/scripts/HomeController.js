var App = angular.module("App", ['ngRoute']);

App.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: "LoginCtrl",
        templateUrl: 'LoginPage.html'
    })
    .when('/Home', {
        controller: "PeopleController",
        resolve: {
            "check": function ($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: 'Home.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});

App.controller("HomeController", function ($scope) {
    $scope.people = [{ Name: 'Emil', UserName: 'Twing1', Password: 'woop1' },
        { Name: 'Anna', UserName: 'Twing2', Password: 'woop2' },
        { Name: 'Panna', UserName: 'Wing3', Password: 'woop3' }];
});

App.controller("LoginCtrl", function ($scope, $location, $rootScope) {
    $scope.submit = function () {

        if ($scope.LoginUserName == 'a' && $scope.LoginPassword == 'a') {
            $rootScope.loggedIn = true;
            $location.path('/');
        } else {
            alert('Password and Username incorrect');
        }

    };
});
    



