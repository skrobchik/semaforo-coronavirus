var last_update = "2020-06-12";
var data_path = "./data/" + last_update + ".js";
import data from data_path

var states = data.keys();
var red_circle = document.getElementById("red");
var orange_circle = document.getElementById("orange");
var yellow_circle = document.getElementById("yellow");
var green_circle = document.getElementById("green");
var state_select = document.getElementById("state");

function off(circle){
    circle.classList.remove("on");
    circle.classList.add("off");
}

function on(circle){
    circle.classList.remove("off");
    circle.classList.add("on");
}

function update(){
}

function init(){
    for(var i=0; i < states.length; i++){
        var option = document.createElement("option");
        option.innerHTML = states[i];
        state_select.appendChild(option);
    }
}