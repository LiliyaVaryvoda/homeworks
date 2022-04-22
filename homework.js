class Vehicle{
    constructor(carModel, carYear, maxSpeed){
        this.model=carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
        this.transportPeople()
    }

    displayInfo(){
        console.log(`Name : ${this.model};
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};`);
    }

    transportPeople(){
        console.log(`I am starting transporting passengers`);
    }
}


class Car extends Vehicle{
    constructor(carModel, carYear, maxSpeed){
        super(carModel, carYear, maxSpeed);
    }
}

class GeneralMotors extends Car {
    constructor(carModel, carYear, maxSpeed){
        super(carModel, carYear, maxSpeed)
    }
}

class Chevrolet extends GeneralMotors {
    constructor(carModel, carYear, maxSpeed){
        super(carModel, carYear, maxSpeed)
    }
}


console.log(new Chevrolet('H20', 2000, 300));

//-------------------------------------------------------


function myParam(param){
    if(typeof param === "undefined"){
        console.log("paramether is needed");
    }
    else if(arguments.length > 1){
        console.log("error");
    }
    else if(Array.isArray(param)){
        console.log(param.length + '\n' + param)
    }
    else if (typeof param === "object"){
        console.log(param.keys())
    }
    else if(typeof param === "string"){
        console.log(param.split().reverse().join())
    }
    else if(param.isInteger = true){
        console.log(param * 10)
    }
}


myParam(6, 8)