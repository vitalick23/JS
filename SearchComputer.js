function SearchComputer(str) {
    ClearTable();
    console.log(str);
    getComputer(str);
}

function searchComp(obj,str) {
    return obj.filter(s =>
            s.ProcessorType == str ||
            s.Frequence == str ||
            s.VideoCart == str );
}

function ClearTable() {
        document.getElementById("mytable").innerHTML ="";
}

function iter(comp){
    comp.next();
}