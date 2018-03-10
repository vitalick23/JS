"use strict"

class Ultrabook extends Computer{
    constructor (initarray){
    super(initarray);
    this.weight = initarray.weight;
    this.screen = initarray.screen;
}
   get Weight (){
        return this.weight;
    }

    set Weight(weight){
        this.weight = weight;
    }

    get Screen(){
        return this.screen;
    }

    set Screen (screen){
        this.screen = screen;
    }
}

Ultrabook.prototype.jsonToObject = function(json){
    const object = json;
    this.id = object["id"];
    this.processorType = object["ProcessorType"];
    this.videoCart = object["VideoCart"];
    this.frequence = object["Frequence"];
    this.manufacture = object["Manufacture"];
    this.bitDepth = object["BitDepth"];
    this.screen = object["Screen"];
    this.weight = object["Weight"];
}


