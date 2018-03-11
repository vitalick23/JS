"use strict"

const [
    GET = "GET",
    PUT = "PUT",
    POST = "POST",
    DELETE = "DELETE"
] = [];

const url = "http://localhost:3000/posts";
async function Get(id, func){
    let options = {
        method: GET
    };
    try {
        const URL = url + '/' + id;
        const response = await fetch(URL, options);
        const obj = await response.json();
        func(obj);
    }
    catch (err) {
        console.log(err);
    }
}

async function GetAll(func){
    const options = {
        method: GET
    };
    try {
        const response = await fetch(url, options);
        const obj = await response.json();
        func(obj);
    } catch (err) {
        console.log(err);
    }
};

async function Post(computer){
    let options = {
        method: POST,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(computer)
    }
    try {
        await fetch(url, options);
    } catch (err) {
        console.log(err);
    }
    alert("Saved");
}

async function Put(id, computer){
    let options = {
        method: PUT,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(computer)
    }
    const URL = url +'/'+id;
    try {
        await fetch(URL, options);
    } catch (err) {
        console.log(err);
    }
    alert("Edit");
}

async function Delete(id, func) {
    if (confirm("Delete this computer?")) {
        let options = {
            method: DELETE
        };
        const URL = url + '/' + id;
        try {
            await fetch(URL, options);
            ClearTable();
            getComputer();
        } catch (err) {
            console.log(err);
        }
    }
}

