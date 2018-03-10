"use strict"

function Ultrabook(weight, screen){
    Computer.call(this);
    this.Weight = weight;
    this.Screen = screen;
}
Ultrabook.prototype = Object.create(Computer.prototype);

Ultrabook.prototype.jsonToObject = function(json){
    const object = json;
    this.Id = object["id"];
    this.ProcessorType = object["ProcessorType"];
    this.VideoCart = object["VideoCart"];
    this.Frequence = object["Frequence"];
    this.Manufacture = object["Manufacture"];
    this.BitDepth = object["BitDepth"];
    this.Screen = object["Screen"];
    this.Weight = object["Weight"];
}

Ultrabook.prototype.getWeight = function(){
    return this.Weight;
}

Ultrabook.prototype.setWeight = function(weight){
    this.Weight = weight;
}

Ultrabook.prototype.getScreen = function(){
    return this.Screen;
}

Ultrabook.prototype.setScreen = function(screen){
    this.Screen = screen;
}
