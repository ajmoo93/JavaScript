var App = angular.module("App", ['ngRoute']);

//Rootscope provides seperation of model and view, 
App.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'LoginPage.html'
    })
    .when('/start', {
        resolve: {
            "check": function ($location, $rootScope) {
                if ($rootScope = true) {
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

App.controller('LoginCtrl', function($scope, $location, $rootScope) {
    $scope.submit = function () {

        if ($scope.LoginUserName == 'admin' && $scope.LoginPassword == 'admin') {
            $rootScope = true;
            $location.path('/Home');
        } else {
            alert('Password and Username incorrect');
        }
    };
});
