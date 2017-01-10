//måste ha declare för att få angular att fungera.
declare var angular: any;
//fileapp måste finnas i en ng-app i html sidan
var fileApp = angular.module('fileApp', []);
//constroller för att kunna gå igenom alla object i typescripten med array
fileApp.controller('fileAppController', function ($scope) {
    let mediafile = new Media();
    var media = []
    var books = []

    $scope.theMedia = function () {
        books.length = 0;
        media.length = 0;

        for (let book of mediafile.GetBooks()) {
            media.push(book.book());
        }
        for (let dvd of mediafile.GetDvds()) {
            media.push(dvd.dvd());
        }
        for (let game of mediafile.GetGames()) {
            media.push(game.game());
        }
        console.log("hejsan");
    }

    $scope.theBooks = function () {
        media.length = 0;
        books.length = 0;
        for (let book of mediafile.GetBooks()) {
            media.push(book.book());
        }
    }
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
