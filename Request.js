"use strict"

var url = "http://localhost:3000/posts/";
function Get(id, func){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = func;
    xhr.open("GET", url + id, true);
    xhr.send();
}

function GetAll(func){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = func;
    xhr.open("GET", url, true);
    xhr.send();
}

function Post(computer){
    var xhr = new XMLHttpRequest();
    xhr.open("Post", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(computer));
    alert("Saved");
}

function Put(id, computer){
    var xhr = new XMLHttpRequest();
    xhr.open("Put", url + id, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(computer));
    alert("Edit");
}

function Delete(id, func){
    if(confirm("Delete this computer?")){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = func;
        xhr.open("Delete", url +"/"+ id, true);
        xhr.send();
    }}
