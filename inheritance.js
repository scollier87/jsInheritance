// Part 1
const vehicleProto = {
    init(make, model, year, type) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.type = type;
    },

    displayInfo() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    },

    calculateAge(currentYear) {
        return `This ${this.type} is ${currentYear - this.year} years old.;`
    },
}

const bike = Object.create(vehicleProto);
bike.init('Trek', 'FX 7.4', 2015, 'bicycle');
bike.numWheels = 2;

//console log to check if it works.
console.log(bike); //{ make: 'Trek', model: 'FX 7.4', year: 2015, numWheels: 2 }

const car = Object.create(vehicleProto);
car.init('Chevrolet', '1500', 2013, 'truck');
car.numDoors = 4;

//console log to check it if it works.
console.log(car); //{ make: 'Chevrolet', model: '1500', year: 2013, numDoors: 4 }

console.log(bike.calculateAge(2023));
console.log(car.displayInfo());

// Part 2

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Add methods to Vehicle's prototype
Vehicle.prototype.displayInfo = function() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
};

Vehicle.prototype.calculateAge = function(currentYear) {
    return `This vehicle is ${currentYear - this.year} year(s) old.`;
};

function Bike(make, model, year, numWheels) {
    Vehicle.call(this, make, model, year); // Inherit common properties
    this.numWheels = numWheels;
}

Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;
function Car(make, model, year, numDoors) {
    Vehicle.call(this, make, model, year); // Inherit common properties
    this.numDoors = numDoors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

let myBike = new Bike('Trek', 'FX 7.4', 2015, 2);
console.log(myBike.displayInfo()); // Inherited method
console.log(myBike.calculateAge(2023)); // Inherited method

let myCar = new Car('Chevrolet', '1500', 2013, 4);
console.log(myCar.displayInfo()); // Inherited method
console.log(myCar.calculateAge(2023)); // Inherited method
