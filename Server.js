"use strict"

function Server(amount, pover){
    Computer.call(this);
    this.Amount = amount;
    this.Power = pover;
}
Server.prototype = Object.create(Computer.prototype);

Server.prototype.jsonToObject = function(json){
    var object = json;
    this.Id = object["Id"];
    this.ProcessorType = object["ProcessorType"];
    this.VideoCart = object["VideoCart"];
    this.Frequence = object["Frequence"];
    this.Manufacture = object["Manufacture"];
    this.BitDepth = object["BitDepth"];
    this.Amount = object["Amount"];
    this.Power = object["Power"];
}

Server.prototype.getAmount = function(){
    return this.Amount;
}

Server.prototype.setAmount = function(amount){
    this.Amount = amount;
}

Server.prototype.getPower = function(){
    return this.Power;
}

Server.prototype.setPover = function(power){
    this.Power = power;
}
