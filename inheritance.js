const vehicleProto = {
    init(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    },

}

const bike = Object.create(vehicleProto);
bike.init('Trek', 'FX 7.4', 2015);
bike.numWheels = 2;

//console log to check if it works.
console.log(bike); //{ make: 'Trek', model: 'FX 7.4', year: 2015, numWheels: 2 }