"use strict"

var videoCart = document.getElementById("videoCart");
var processorType = document.getElementById("processorType");
var frequence = document.getElementById("frequence");
var manufacture = document.getElementById("manufacture");
var bitDepth = document.getElementById("bitDepth");
var power = document.getElementById("power");
var amount = document.getElementById("amount");
var weight = document.getElementById("weight");
var screen = document.getElementById("screen");
var id = getParam("id");
var selectedValue = document.getElementById("selectBox");

function GenerateClass(comp, type){
    if(type == '0'){
        weight.value = comp.getWeight();
        screen.value = comp.getScreen();
    }
    else{

        amount.value = comp.getAmount();
        power.value = comp.getPower();
    }
    selectedValue.selectedIndex = type;
    videoCart.value = comp.getVideoCart();
    processorType.value = comp.getProcessorType();
    frequence.value = comp.getFrequence();
    bitDepth.value = comp.getBitDepth();
    manufacture.value = comp.getManufacture();
}

function getParam(name) {
    var param = location.search.split(name + '=')[1];
    return param !== undefined ? param.split('&')[0] : null;
}

function changeType() {
    var types = selectedValue.options[document.getElementById("selectBox").selectedIndex].value;
    if(types == "0"){
        document.getElementById("amountDiv").style.display='none';
        document.getElementById("powerDiv").style.display='none';
        document.getElementById("weightDiv").style.display='block';
        document.getElementById("screenDiv").style.display='block';
    }
    else{
        document.getElementById("amountDiv").style.display='block';
        document.getElementById("powerDiv").style.display='block';
        document.getElementById("weightDiv").style.display='none';
        document.getElementById("screenDiv").style.display='none';
    }
}

function GetComputer(){
    if(id!=null){
        var func = function() {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.responseText);
                if(obj["Amount"]!= undefined){
                    var comp = new Server();
                    comp.jsonToObject(obj);
                    GenerateClass(comp,1);
                    changeType();
                }
                else{
                    var comp = new Ultrabook();
                    comp.jsonToObject(obj);
                    GenerateClass(comp,0);
                    changeType();
                }
            }};
        Get(id, func);
    }}

function GenerateComp(type){
    if(type == '0'){
        var comp = new Ultrabook(weight.value, screen.value);
    }
    else{
        var comp = new Server(amount.value, power.value);
    }
    comp.setFrequence(frequence.value);
    comp.setVideoCart(videoCart.value);
    comp.setProcessorType(processorType.value);
    comp.setManufacture(manufacture.value);
    comp.setBitDepth(bitDepth.value);
    return comp;
}


function reset(){
    weight.value = "";
    screen.value = "";
    amount.value = "";
    power.value = "";
    videoCart.value = "";
    processorType.value = "";
    frequence.value = "";
    bitDepth.value = "";
    manufacture.value = "";
}

function Save(type){
    var comp = GenerateComp(type);
    if(id!=null) Put(id,comp);
    else Post(comp);
    reset();
}