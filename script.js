var last_update = "2020-06-12";
import data from "./data/2020-06-12.js"

const COLOR_COLUMN = 0;
const TREND_COLUMN = 1;

var states = keys(data);

var circle_ids = ["red", "orange", "yellow", "green"];
var circles = [];
for(var i = 0; i < circle_ids.length; i++){
    circles.push(document.getElementById(circle_ids[i]));
}
var state_select = document.getElementById("state");
var trend_indicator = document.getElementById("trend-indicator");

function off(circle){
    circle.classList.remove("on");
    circle.classList.add("off");
}

function on(circle){
    circle.classList.remove("off");
    circle.classList.add("on");
}

function set_color(color){
    for(var i = 0; i < circles.length; i++){
        var circle = circles[i];
        if(circle.classList.contains("on")){
            off(circle);
        }
    }
    var i = circle_ids.indexOf(color);
    var circle = circles[i];
    on(circle);
    }
}

function set_trend(trend) {
    trend_indicator.classList = [("indicator-"+trend)];
}

function update(){
    state = state_select.value;
    color = data[state][COLOR_COLUMN];
    trend = data[state][TREND_COLUMN];
    set_color(color);
    set_trend(trend);
}

function init(){
    for(var i=0; i < states.length; i++){
        var option = document.createElement("option");
        option.innerHTML = states[i];
        option.value = states[i];
        state_select.appendChild(option);
    }
}