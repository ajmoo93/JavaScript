//veriables
let age:number;
let firstName: string;
let LastName: string;
let person: Object;

age = 34;
firstName = "Emil";
LastName = "Lidgren";
person = { name: "Emil" };

let numberList: Array<number> = [1, 2, 3];

let personInfo: [number, string];

//personInfo = ["Emil", 23]; // number first

personInfo = [23, "Emil"];

//loopar
let list = [4, 2, 7];
for (let i in list) {
    console.log("Values from for (let i in list):" + i); // Ger index 0,1,2
}
for (let i of list) {
    console.log ("Values from for (let i in list):" + i); // get values 4,2,7
}

//Metoder

function func(): void {
    let x = 5;
    //Void = no return.
}

function func2():string {
    let x = "4";
    return x;
}

let result = func2();

function func3(age: number, name: string): number { // inparameter av typ number, retur av type number.
    var x = 10 + age;
    return x;
}

let resultFromFunc3 = func3(23, "Emil");

// klaser 
class pet {
    public name: string;// publik accessnar utifrån klassen 
    private age: number; // privat endast tillgänglig inifrån klassen.
    // konstruktor 
    public constructor(petName: string) {
        this.name = petName;

    }
    public setNewAge(newAge: number): void {
        age = newAge;
        this.verifyNewAge(newAge);
    }
    private verifyNewAge(ageToVerify: number): number {
        return ageToVerify;
    }


    public getAge(): number {
        return age;
    }
}

let fistPet1: pet = new pet("Mr-Toddle");
fistPet1.name = "Mr-Miggle";
fistPet1.setNewAge(1);
let petAge: number = fistPet1.getAge();

console.log("Pet age is: " + age);

//class animals
class animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;

    }
    move(distanceInMeters: number) {
        console.log(this.name + "moved" + distanceInMeters + "meters");
    }
}
class snake extends animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 3) {
        console.log("Wombeling")
        super.move(distanceInMeters);
    }
}

let mySnake: snake = new snake("Mr-Snucki");
mySnake.name = "Ms-Snucki"; // tillgång till veriablen name eftersom den finns i base.klassen.
mySnake.move();

//modules
module Animals {
    export class Animal {
        public name: string;
        private age: number;
        public constructor(theName: string) {
            this.name = theName;
        }
                
    }
}
