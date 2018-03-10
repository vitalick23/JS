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
    var dd = document.getElementById("mytable").innerHTML ="";
}