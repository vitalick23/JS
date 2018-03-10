"use strict"

function getComputer(){
    var func = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            addTable(obj);
        };};
    GetAll(func);
}

function Deletes(id){
    var func = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myTableDiv = document.getElementById("mytable");
            myTableDiv.innerHTML = "";
            getComputer();
        }};
    Delete(id, func);
}

function addTable(stock) {
    var myTableDiv = document.getElementById("mytable")
    var table = document.createElement('TABLE')
    var tableBody = document.createElement('TBODY')
    table.border = '1px'
    table.appendChild(tableBody);

    var heading = new Array();
    heading[7] = "Id"
    heading[4] = "ProcessorType"
    heading[3] = "VideoCart"
    heading[2] = "Frequence"
    heading[5] = "Manufacture"
    heading[6] = "BitDepth"
    heading[0] = "Amount/Weight"
    heading[1] = "Power/Screen"

    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (var i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }

    for (var i = 0; i < stock.length; i++) {
        var tr = document.createElement('TR');
        for (var key in stock[i]) {
            var td = document.createElement('TD')
            td.width = "120";
            td.appendChild(document.createTextNode(stock[i][key]));
            tr.appendChild(td);
        }

        var div = document.createElement('div');
        var link = document.createElement("a");
        var linkText = document.createTextNode("Details ");
        var link2 = document.createElement("a");
        var linkText2 = document.createTextNode(" Delete ");
        var link3 = document.createElement("a");
        var linkText3 = document.createTextNode(" Update ");
        link.title = "Details";
        link.href = "Details.html?id=" + stock[i][key] ;
        link2.href = "javascript:Deletes("+ stock[i]["id"] + ");";
        link2.title = "Delete";
        link3.title = "Update";
        link3.href = "Update.html?id=" + stock[i][key];

        link.appendChild(linkText);
        link2.appendChild(linkText2);
        link3.appendChild(linkText3);
        div.appendChild(link);
        div.appendChild(link2);
        div.appendChild(link3);
        tr.appendChild(div);
        tableBody.appendChild(tr);
    }
    myTableDiv.appendChild(table)
}
