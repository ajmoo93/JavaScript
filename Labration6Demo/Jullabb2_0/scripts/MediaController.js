var MediaApp = angular.module('MediaApp', []);

MediaApp.factory("MediaController", function ($q) {
    var LoginUser = [{ Name: 'Emil', UserName: 'Somilakki', Password: 'Twister1' },
    { Name: 'Johanna', UserName: 'slage', Password: 'slage12' },
    { Name: 'Amanda', UserName: 'potato', Password: 'potato12' },
    { Name: 'Konny', UserName: 'tomato', Password: 'tomato12' },
    { Name: 'Sarah', UserName: 'kiwi', Password: 'kiwi12' }, ];

    var Movie = [{ Title: 'CrowsNest', Year: '2014' },
        { Title: 'EndOfDawn', Year: '2004' },
        { Title: 'EarthHistory', Year: '1994' },
        { Title: 'CaptainSplit', Year: '1993' },
        { Title: 'StongType2', Year: '2015' },
        { Title: 'MovieMaker', Year: '2001' },
        { Title: 'Anektori', Year: '1945' },
        { Title: 'Stringstup', Year: '1912' },
    ];

    var factory = {};

    factory.getAllMovies = function () {
        return Movie;
    }
    factory.Loginvalidate = function (UserName, Password) {
        var q = $q.defer();
        var user = {};
        angular.forEach(LoginUser, function (value, key) {
            if (value.UserName == UserName && value.Password == Password) {
                user = value;
            };

        });
        if (angular.equals(user, {})) {
            q.reject('Username and password incorect');

        } else {
            q.resolve(user.Name);
        }
        return q.promise;
    };

    factory.GetRememberdUser = function () {
        var q = $q.defer();
        var user = {};
        angular.forEach(LoginUser, function (value, key) {
            if (value.UserName == localStorage.rememberUser) {
                user = value;
            }
        });

        if (angular.equals(user, {})) {
            q.reject();
        } else {
            q.resolve(user);
        };
        return q.promise;
    }
    return factory;
});

var controllers = {};
controllers.MediaLibController = function ($scope, $q, $location, MediaController) {

    $scope.AllMovies = MediaController.getAllMovies();
    $scope.login = function () {
        MediaController.Loginvalidate($scope.LoginUserName, $scope.loginPassword).then(
            function (UserName) {
                sessionStorage.removeItem('user');
                sessionStorage.user = UserName;

                if ($scope.loginRemember) {
                    localStorage.rememberUser = $scope.LoginUserName;
                } else {
                    localStorage.removeItem('rememberUser');
                }
                window.location.href = 'home.html';
            },
            function (error) {
                $scope.error = error;
            });
    };
    $scope.LoggedIn = function(){
        $scope.user = sessionStorage.user;
    };

    $scope.StoredUser = function() {
        MediaController.GetRememberdUser().then(function (user) {
            $scope.LoginUserName = user.UserName;
            $scope.loginPassword = user.Password;
            $scope.loginRemember = true;
        }, function(){
            console.log("failed To remember user!");
        });

    };

};
MediaApp.controller(controllers);