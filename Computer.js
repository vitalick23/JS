"use strict"

function Computer() {
    let Id;
    let ProcessorType;
    let Frequence;
    let Manufacture;
    let VideoCart ;
    let BitDepth;
}

Computer.prototype.getProcessorType = function(){
    return this.ProcessorType;
}

Computer.prototype.setProcessorType = function(processorType){
    this.ProcessorType = processorType;
}


Computer.prototype.getFrequence = function(){
    return this.Frequence;
}

Computer.prototype.setFrequence = function(frequence){
    this.Frequence = frequence;
}

Computer.prototype.getManufacture = function(){
    return this.Manufacture;
}

Computer.prototype.setManufacture = function(manufacture){
    this.Manufacture = manufacture;
}

Computer.prototype.getVideoCart = function(){
    return this.VideoCart;
}

Computer.prototype.setVideoCart = function(videoCart){
    this.VideoCart = videoCart;
}


Computer.prototype.getId = function(){
    return this.Id;
}

Computer.prototype.setId = function(id){
    this.Id = id;
}

Computer.prototype.getBitDepth = function(){
    return this.BitDepth;
}

Computer.prototype.setBitDepth = function(bitDepth){
    this.BitDepth = bitDepth;
}
