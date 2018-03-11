"use strict"

const videoCart = document.getElementById("videoCart");
const processorType = document.getElementById("processorType");
const frequence = document.getElementById("frequence");
const manufacture = document.getElementById("manufacture");
const bitDepth = document.getElementById("bitDepth");
const power = document.getElementById("power");
const amount = document.getElementById("amount");
const weight = document.getElementById("weight");
const screen = document.getElementById("screen");
const id = getParam("id");
const selectedValue = document.getElementById("selectBox");

function GenerateClass(comp, type){
    if(type == '0'){
        weight.value = comp.Weight;
        screen.value = comp.Screen;
    }
    else{

        amount.value = comp.Amount;
        power.value = comp.Power;
    }
    selectedValue.selectedIndex = type;
    videoCart.value = comp.VideoCart;
    processorType.value = comp.ProcessorType;
    frequence.value = comp.Frequence;
    bitDepth.value = comp.BitDepth;
    manufacture.value = comp.Manufacture;
}

function getParam(name) {
    const param = location.search.split(name + '=')[1];
    return param !== undefined ? param.split('&')[0] : null;
}

function changeType() {
    const types = selectedValue.options[selectBox.selectedIndex].value;
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
        const func = function(obj) {
                if(obj["Amount"]!= undefined){
                    const comp = new Server(obj);
                    comp.jsonToObject(obj);
                    GenerateClass(comp,1);
                    changeType();
                }
                else{
                    const comp = new Ultrabook(obj);
                    comp.jsonToObject(obj);
                    GenerateClass(comp,0);
                    changeType();
                }

            }
        Get(id, func);};
    }

function GenerateComp(type){
    if(type == '0'){
        const comp = {
            Weight: weight.value,
            Screen: screen.value,
            Frequence: frequence.value,
            VideoCart: videoCart.value,
            ProcessorType: processorType.value,
            Manufacture: manufacture.value,
            BitDepth: bitDepth.value,
            id: id,
        };

        return comp;
    }
    else {
        const comp = {
            Amount: amount.value,
            Power: power.value,
            Frequence: frequence.value,
            VideoCart: videoCart.value,
            ProcessorType: processorType.value,
            Manufacture: manufacture.value,
            BitDepth: bitDepth.value,
            id: id,
        };
        return comp;
    }
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
    const comp = GenerateComp(type);
    if(id!=null) Put(id,comp);
    else Post(comp);
    reset();
}