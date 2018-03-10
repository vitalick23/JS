"use strict"

class Computer {
    constructor(initArray) {
        let {id, pro, fre, man, vid, bit} = initArray;
        this.id = id;
        this.processorType = pro;
        this.frequence = fre;
        this.manufacture = man;
        this.videoCart = vid;
        this.bitDepth = bit;
    }


    get ProcessorType() {
        return this.processorType;
    }

    set ProcessorType(processorType) {
        this.processorType = processorType;
    }


    get Frequence() {
        return this.frequence;
    }

    set Frequence(frequence) {
        this.frequence = frequence;
    }

    get Manufacture() {
        return this.manufacture;
    }

    set Manufacture(manufacture) {
        this.manufacture = manufacture;
    }

    get VideoCart() {
        return this.videoCart;
    }

    set VideoCart(videoCart) {
        this.videoCart = videoCart;
    }


    get Id() {
        return this.id;
    }

    set Id(id) {
        this.id = id;
    }

    get BitDepth() {
        return this.bitDepth;
    }

    set BitDepth(bitDepth) {
        this.bitDepth = bitDepth;
    }
}