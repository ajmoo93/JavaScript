var App = angular.module("App", ['ngRoute']);

//Rootscope provides seperation of model and view, 
App.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'LoginPage.html'
    })
    .when('/Home', {
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
        redirectTo: '/LoginPage.html'
    });
});

App.controller('LoginCtrl', function ($scope, $location, $rootScope) {
    $scope.submit = function () {

        if ($scope.LoginUserName == 'admin' && $scope.LoginPassword == 'admin') {
            $rootScope.loggedIn = true;
            $location.path('/');
        } else {
            alert('Password and Username incorrect');
        }
    };
});
