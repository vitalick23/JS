"use strict"

const [
    GET = "GET",
    PUT = "PUT",
    POST = "POST",
    DELETE = "DELETE"
] = [];

var url = "http://localhost:3000/posts/";
function Get(id, func){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = func;
    xhr.open(GET, url + id, true);
    xhr.send();
}

function GetAll(func){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = func;
    xhr.open(GET, url, true);
    xhr.send();
}

function Post(computer){
    const xhr = new XMLHttpRequest();
    xhr.open(POST, url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(computer));
    alert("Saved");
}

function Put(id, computer){
    const xhr = new XMLHttpRequest();
    xhr.open(PUT, url + id, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(computer));
    alert("Edit");
}

function Delete(id, func){
    if(confirm("Delete this computer?")){
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = func;
        xhr.open(DELETE, url +"/"+ id, true);
        xhr.send();
    }}
