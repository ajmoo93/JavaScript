var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Product = (function () {
    //Viktig constructor du ska ha alla props här pluss lägga till this för att spara dem sedan.
    function Product(name, category, price, artNr) {
        this._name = name, this._category = category, this._price = price, this._artNr = artNr;
    }
    return Product;
})();
var Book = (function (_super) {
    __extends(Book, _super);
    //En constructor i var class med alla props den behöver.
    function Book(name, category, price, artNr, author, year) {
        _super.call(this, name, category, price, artNr);
        this._name = name, this._category = category, this._price = price, this._artNr = artNr, this.author = author, this.year = year;
    }
    //För att skriva ut vad du vill att den ska visa
    Book.prototype.book = function () {
        //Ha med alla props du vill med hjälp av ${this.}
        return this;
    };
    return Book;
})(Product);
//Let med ett nytt namn kan du skapa en ny bok med props som du väljer, bara dem
//matchar dem andra tex name: string, price: number
//let bookinf = new Book("Starfall", "Earth", 9.99, 54584);
//Console.log för att se så det fungerar.
//console.log(bookinf.book());
var Dvd = (function (_super) {
    __extends(Dvd, _super);
    function Dvd(name, category, price, artNr) {
        _super.call(this, name, category, price, artNr);
        this._name = name, this._category = category, this._price = price, this._artNr = artNr;
    }
    //en metod som returnerar this med egenskaperna där uppe.
    Dvd.prototype.dvd = function () {
        return this;
    };
    return Dvd;
})(Product);
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(name, category, price, artNr) {
        _super.call(this, name, category, price, artNr);
        this._name = name, this._category = category, this._price = price, this._artNr = artNr;
    }
    Game.prototype.game = function () {
        return this;
    };
    return Game;
})(Product);
// En ny klass som har median i sig, där du skapar sina arrayer med object i.
var Media = (function () {
    // skapa en konstructor med arrayer
    function Media() {
        this.books = [];
        this.dvds = [];
        this.games = [];
        //måste vara som egenskaperna uppe, kan inte blanda dem egenskaperna här.
        this.AddBook(new Book("CrowsNest", "Horror", 9.99, "5456448645", "colli", "1919"));
        this.AddBook(new Book("Black Widdow", "Nature", 12.99, "4646846211", "Sara", "1962"));
        this.AddBook(new Book("Commununity", "Cmomedy", 19.99, "5484236456", "Rasmus", "1954"));
        this.AddBook(new Book("JavaScript", "Education", 39.99, "219755445", "Walter", "2002"));
        this.AddDvd(new Dvd("FallingSky", "Action", 14.99, "755456456"));
        this.AddDvd(new Dvd("Sorrow", "Drama", 19.99, "45667746212"));
        this.AddDvd(new Dvd("Collage", "Education", 24.99, "13776565445"));
        this.AddDvd(new Dvd("Williams", "Cmomedy", 4.99, "9566758254"));
        this.AddGame(new Game("Banished", "Survival", 18.99, "68822533535"));
        this.AddGame(new Game("Battlefield 1", "Fps", 39.99, "29954235466"));
        this.AddGame(new Game("Cs:Go", "Fps", 13.99, "0996544454"));
        this.AddGame(new Game("Subnautica", "Survival", 19.99, "45453334566"));
    }
    //en add factory som lägger till böckerna från arrayn till retur
    Media.prototype.AddBook = function (book) {
        this.books.push(book);
    };
    Media.prototype.AddDvd = function (dvd) {
        this.dvds.push(dvd);
    };
    Media.prototype.AddGame = function (game) {
        this.games.push(game);
    };
    //returnerar böckerna du får fårn arrayn till html sidan
    Media.prototype.GetBooks = function () {
        return this.books;
    };
    Media.prototype.GetDvds = function () {
        return this.dvds;
    };
    Media.prototype.GetGames = function () {
        return this.games;
    };
    return Media;
})();
//let Gameinf = (function () {
//    function Gameinf(name) {
//        this.name = name;
//    }
//    Gameinf.prototype.info = function () {
//        return "This is " + this.name;
//    };
//    return Gameinf;
//}) ();
//let gameinf;
// gameinf = new Gameinf[("Banished")];
//console.log(gameinf.info()); 
