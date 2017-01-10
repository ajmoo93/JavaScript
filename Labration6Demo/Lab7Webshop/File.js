//fileapp måste finnas i en ng-app i html sidan
var fileApp = angular.module('fileApp', []);
//constroller för att kunna gå igenom alla object i typescripten med array
fileApp.controller('fileAppController', function ($scope) {
    var mediafile = new Media();
    var media = [];
    var books = [];
    $scope.theMedia = function () {
        books.length = 0;
        media.length = 0;
        for (var _i = 0, _a = mediafile.GetBooks(); _i < _a.length; _i++) {
            var book = _a[_i];
            media.push(book.book());
        }
        for (var _b = 0, _c = mediafile.GetDvds(); _b < _c.length; _b++) {
            var dvd = _c[_b];
            media.push(dvd.dvd());
        }
        for (var _d = 0, _e = mediafile.GetGames(); _d < _e.length; _d++) {
            var game = _e[_d];
            media.push(game.game());
        }
        console.log("hejsan");
    };
    $scope.theBooks = function () {
        media.length = 0;
        books.length = 0;
        for (var _i = 0, _a = mediafile.GetBooks(); _i < _a.length; _i++) {
            var book = _a[_i];
            media.push(book.book());
        }
    };
    $scope.addBook = function () {
        mediafile.AddBook(new Book($scope.name, $scope.category, $scope.price, $scope.artNr, $scope.author, $scope.year));
        $scope.name = "";
        $scope.category = "";
        $scope.price = "";
        $scope.artNr = "";
        $scope.author = "";
        $scope.year = "";
    };
    $scope.MediaArray = media;
    $scope.BookArray = books;
});
