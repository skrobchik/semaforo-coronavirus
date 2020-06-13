var last_update = "2020-06-12";
//import data from "./data/2020-06-12.js"

const DATA = {
    "Baja California": ["red", "decreasing"],
    "Baja California Sur": ["red", "increasing"],
    "Sonora": ["red", "increasing"],
    "Chihuahua": ["red", "increasing"],
    "Coahuila": ["red", "increasing"],
    "Nuevo Leon": ["red", "increasing"],
    "Tamaulipas": ["red", "stable"],
    "Sinaloa": ["red", "increasing"],
    "Durango": ["red", "increasing"],
    "Zacatecas": ["red", "increasing"],
    "San Luis Potosi": ["red", "increasing"],
    "Nayarit": ["red", "increasing"],
    "Aguascalientes": ["red", "increasing"],
    "Jalisco": ["red", "increasing"],
    "Guanajuato": ["red", "increasing"],
    "Queretaro": ["red", "decreasing"],
    "Hidalgo": ["red", "decreasing"],
    "Veracruz": ["red", "stable"],
    "Colima": ["red", "increasing"],
    "Michoacan": ["red", "increasing"],
    "Estado de Mexico": ["red", "increasing"],
    "CDMX": ["red", "decreasing"],
    "Tlaxcala": ["red", "increasing"],
    "Guerrero": ["red", "increasing"],
    "Morelos": ["red", "stable"],
    "Puebla": ["red", "increasing"],
    "Oaxaca": ["red", "stable"],
    "Chiapas": ["red", "increasing"],
    "Tabasco": ["red", "stable"],
    "Campeche": ["red", "increasing"],
    "Quintana Roo": ["red", "stable"],
    "Yucatan": ["red", "decreasing"],
    "Zurich, Suiza": ["green", "decreasing"]
};

const COLOR_COLUMN = 0;
const TREND_COLUMN = 1;

var states = Object.keys(DATA);

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

function set_trend(trend) {
    trend_indicator.classList = [("indicator-"+trend)];
}

function update(){
    state = state_select.value;
    color = DATA[state][COLOR_COLUMN];
    trend = DATA[state][TREND_COLUMN];
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
    var last_update_p = document.getElementById("last-update");
    last_update_p.innerHTML = "Ultima actualizacion: " + last_update;
}

init();
update();