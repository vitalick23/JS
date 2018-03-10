"use strict"

class Server extends Computer {
    constructor(initarray) {
        super(initarray);
        this.amount = initarray.amount;
        this.power = initarray.power;
    }

    get Amount (){
        return this.amount;
    }

    set Amount (amount){
        this.amount = amount;
    }

    get Power(){
        return this.power;
    }

    set Power (power){
        this.power = power;
    }
}
Server.prototype.jsonToObject = function(json){
    const object = json;
    this.Id = object["Id"];
    this.ProcessorType = object["ProcessorType"];
    this.VideoCart = object["VideoCart"];
    this.Frequence = object["Frequence"];
    this.Manufacture = object["Manufacture"];
    this.BitDepth = object["BitDepth"];
    this.Amount = object["Amount"];
    this.Power = object["Power"];
}


