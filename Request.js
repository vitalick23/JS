"use strict"

const [
    GET = "GET",
    PUT = "PUT",
    POST = "POST",
    DELETE = "DELETE"
] = [];

const url = "http://localhost:3000/posts";
function Get(id, func){
    let options = {
        method: GET
    };
    const URL = url +'/'+id;
    fetch(URL, options)
        .then(function(response) {
            console.log(response.status);
            if (response.status != 200) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(function(json) {
            func(json);
        })
        .catch(console.log);
}

function GetAll(func){
    let options = {
        method: GET
    };
    fetch(url, options)
        .then(function(response) {
            console.log(response.status);
            if (response.status != 200) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(function(json) {
            func(json);
        })
        .catch(console.log);
};

function Post(computer){
    let options = {
        method: POST,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(computer)
    }
    fetch(url, options)
        .then(function(response) {
            if (response.status != 200) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }
        })
        .catch(console.log);
    alert("Saved");
}

function Put(id, computer){
    let options = {
        method: PUT,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(computer)
    }
    const URL = url +'/'+id;
    fetch(URL, options)
        .then(function(response) {
            if (response.status != 200) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }
        })
        .catch(console.log);
    alert("Edit");
}

function Delete(id, func) {
    if (confirm("Delete this computer?")) {
        let options = {
            method: DELETE
        };
        const URL = url + '/' + id;
        fetch(URL, options)
            .then(function (response) {
                if (response.status != 200) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                ClearTable();
                getComputer();
            })
            .catch(console.log);
    }
}

