// // Part 1 Proto Inheritance

// const vehicleProto = {
//     init(make, model, year, type) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.type = type; //added vehicle type
//     },

//     displayInfo() {
//         return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
//     },

//     calculateAge(currentYear) {
//         return `This ${this.type} is ${currentYear - this.year} year(s) old.;`
//     },
// }

// const bike = Object.create(vehicleProto);
// bike.init('Trek', 'FX 7.4', 2015, 'bicycle');
// bike.numWheels = 2;

// //console log to check if it works.
// console.log(bike); //{ make: 'Trek', model: 'FX 7.4', year: 2015, numWheels: 2 }

// const car = Object.create(vehicleProto);
// car.init('Chevrolet', '1500', 2013, 'truck');
// car.numDoors = 4;

// //console log to check it if it works.
// console.log(car); //{ make: 'Chevrolet', model: '1500', year: 2013, numDoors: 4 }

// console.log(bike.calculateAge(2023));
// console.log(car.displayInfo());

// Part 2 Constructor Inheritance

// function Vehicle(make, model, year, type) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.type = type
// }

// // Add methods to Vehicle's prototype
// Vehicle.prototype.displayInfo = function() {
//     return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
// };

// Vehicle.prototype.calculateAge = function(currentYear) {
//     return `This ${this.type} is ${currentYear - this.year} year(s) old.`;
// };

// function Bike(make, model, year, type, numWheels) {
//     Vehicle.call(this, make, model, year, type); // Inherit common properties
//     this.numWheels = numWheels;
// }

// Bike.prototype = Object.create(Vehicle.prototype);
// Bike.prototype.constructor = Bike;
// function Car(make, model, year, type, numDoors) {
//     Vehicle.call(this, make, model, year, type,); // Inherit common properties
//     this.numDoors = numDoors;
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// let myBike = new Bike('Trek', 'FX 7.4', 2015, 'bicycle', 2);
// console.log(myBike.displayInfo()); // Inherited method
// console.log(myBike.calculateAge(2023)); // Inherited method

// let myCar = new Car('Chevrolet', '1500', 2013, 'truck', 4);
// console.log(myCar.displayInfo()); // Inherited method
// console.log(myCar.calculateAge(2023)); // Inherited method

// Part 3 Classes

// class Vehicle {
//     constructor(make, model, year, type) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.type = type;
//     }

//     displayInfo() {
//         return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
//     }

//     calculateAge(currentYear) {
//         return `This ${this.type} is ${currentYear - this.year} year(s) old.`;
//     }
// }

// class Car extends Vehicle {
//     constructor(make, model, year, numDoors) {
//         super(make, model, year, 'truck');
//         this.numDoors = numDoors;
//     }
// }

// class Bike extends Vehicle {
//     constructor(make, model, year, numWheels) {
//         super(make, model, year, 'bicycle');
//         this.numWheels = numWheels;
//     }
// }

// let myCar1 = new Car('Chevrolet', '1500', 2013, 4);
// console.log(myCar1.displayInfo());  // "Make: Chevrolet, Model: 1500, Year: 2013"
// console.log(myCar1.calculateAge(2023));  // "This car is 3 year(s) old."

// let myBike1 = new Bike('Trek', 'FX 7.4', 2015, 2);
// console.log(myBike1.displayInfo());  // "Make: Trek, Model: FX 7.4, Year: 2015"
// console.log(myBike1.calculateAge(2023));  // "This bike is 1 year(s) old."

//Bonus mixins or composition

class VehicleClass {
    constructor(make, model, year, type) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.type = type;
    }
}

let extraInfoMixin = {
    displayInfo(){
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Type: ${this.type}`
    },

    calculateAge(currentYear){
        return `This ${this.type} is ${currentYear - this.year} year(s) old.`
    }
}

Object.assign(VehicleClass.prototype, extraInfoMixin);

class Car extends VehicleClass {
    constructor(make, model, year, numDoors) {
        super(make, model, year, 'truck');
        this.numDoors = numDoors;
    }
}

let newCar = new Car('Chevy', 1500, 2013, 4);

console.log(newCar.calculateAge(2023))