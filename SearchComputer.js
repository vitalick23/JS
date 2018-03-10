function SearchComputer(str) {
    var dd = document.getElementById("mytable").innerHTML ="";
    console.log(str);
    getComputer(str);
}

function searchComp(obj,str) {
    return obj.filter(s =>
            s.ProcessorType == str ||
            s.Frequence == str ||
            s.VideoCart == str );
}