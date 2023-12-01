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