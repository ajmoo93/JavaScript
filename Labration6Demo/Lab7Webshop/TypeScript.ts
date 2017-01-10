class Product {
     _name: string;
     _category: string;
     _price: number;
     _artNr: string;
    //Viktig constructor du ska ha alla props här pluss lägga till this för att spara dem sedan.
     constructor(name: string, category: string, price: number, artNr: string) {
         this._name = name, this._category = category, this._price = price, this._artNr = artNr;
    }
}

class Book extends Product{
    author: string;
    year: string;
    //En constructor i var class med alla props den behöver.
    constructor(name: string, category: string, price: number, artNr: string, author: string, year: string) {
        super(name, category, price, artNr);
        this._name = name, this._category = category, this._price = price, this._artNr = artNr, this.author = author, this.year = year;

    }
    //För att skriva ut vad du vill att den ska visa
    book(): Book {
        //Ha med alla props du vill med hjälp av ${this.}
        return this;
    }
}
//Let med ett nytt namn kan du skapa en ny bok med props som du väljer, bara dem
//matchar dem andra tex name: string, price: number
//let bookinf = new Book("Starfall", "Earth", 9.99, 54584);
//Console.log för att se så det fungerar.
//console.log(bookinf.book());


class Dvd extends Product {
    constructor(name: string, category: string, price: number, artNr: string) {
        super(name, category, price, artNr);
        this._name = name, this._category = category, this._price = price, this._artNr = artNr;
    }
    //en metod som returnerar this med egenskaperna där uppe.
    dvd(): Dvd {

        return this;
    }

}

class Game extends Product {
    constructor(name: string, category: string, price: number, artNr: string) {
        super(name, category, price, artNr);
        this._name = name, this._category = category, this._price = price, this._artNr = artNr;
    }
    game(): Game {

        return this;
    }
}

// En ny klass som har median i sig, där du skapar sina arrayer med object i.
class Media {
    books: Book[]
    dvds: Dvd[]
    games: Game[]

    // skapa en konstructor med arrayer
    constructor() {
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
    AddBook(book: Book) {
        this.books.push(book);
    }
    AddDvd(dvd: Dvd) {
        this.dvds.push(dvd);
    }
    AddGame(game: Game) {
        this.games.push(game);
    }
    //returnerar böckerna du får fårn arrayn till html sidan
    GetBooks(): Book[] {
        return this.books;
    }
    GetDvds(): Dvd[] {
        return this.dvds;
    }
    GetGames(): Game[] {
        return this.games;
    }
}


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