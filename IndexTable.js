"use strict"

function getComputer(search = ""){
    if(search == "") {
        var func = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.responseText);
                addTable(obj);
            };
        };
    }
    else {
        var func = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.responseText);
                let index = 0;
                addTable( searchComp(obj,search));
            };
        };

    }
    GetAll(func);
}

function Deletes(id){
    let func = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myTableDiv = document.getElementById("mytable");
            myTableDiv.innerHTML = "";
            getComputer();
        }};
    Delete(id, func);
}

function addTable(stock) {
    const myTableDiv = document.getElementById("mytable")
    const table = document.createElement('TABLE')
    const tableBody = document.createElement('TBODY')
    table.border = '1px'
    table.appendChild(tableBody);

    let heading = new Array();
    heading[7] = "Id"
    heading[4] = "ProcessorType"
    heading[3] = "VideoCart"
    heading[2] = "Frequence"
    heading[5] = "Manufacture"
    heading[6] = "BitDepth"
    heading[0] = "Amount/Weight"
    heading[1] = "Power/Screen"

    const tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (let i = 0; i < heading.length; i++) {
        let th = document.createElement('TH')
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }

    for (let i = 0; i < stock.length; i++) {
        let tr = document.createElement('TR');
        for (let key in stock[i]) {
            let td = document.createElement('TD')
            td.width = "120";
            td.appendChild(document.createTextNode(stock[i][key]));
            tr.appendChild(td);
        }

        const div = document.createElement('div');
        const link = document.createElement("a");
        const linkText = document.createTextNode("Details ");
        const link2 = document.createElement("a");
        const linkText2 = document.createTextNode(" Delete ");
        const link3 = document.createElement("a");
        const linkText3 = document.createTextNode(" Update ");
        link.title = "Details";
        link.href = "Details.html?id=" + stock[i]["id"] ;
        link2.href = "javascript:Deletes("+ stock[i]["id"] + ");";
        link2.title = "Delete";
        link3.title = "Update";
        link3.href = "Update.html?id=" + stock[i]["id"];

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
