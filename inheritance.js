const vehicleProto = {
    init(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    },
    // think of common methods
}

const bike = Object.create(vehicleProto);
bike.init('Trek', 'FX 7.4', 2015);
bike.numWheels = 2;

//console log to check if it works.
console.log(bike); //{ make: 'Trek', model: 'FX 7.4', year: 2015, numWheels: 2 }

const car = Object.create(vehicleProto);
car.init('Chevrolet', '1500', 2013);
car.numDoors = 4;

//console log to check it if it works.
console.log(car);