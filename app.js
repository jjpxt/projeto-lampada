const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

let turnedOnbyBtn = false;

function isLampBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./img/ligada.jpg";
  }
}

function lampOff() {
  if (!isLampBroken() && !turnedOnbyBtn) {
    lamp.src = "./img/desligada.jpg";
  }
}

function buttonLampOn() {
  if (!isLampBroken()) {
    lamp.src = "./img/ligada.jpg";
    turnedOnbyBtn = true;
  }
}

function buttonLampOff() {
  if (!isLampBroken()) {
    lamp.src = "./img/desligada.jpg";
    turnedOnbyBtn = false;
  }
}

function brokenLamp() {
  lamp.src = "./img/quebrada.jpg";
}

turnOn.addEventListener("click", buttonLampOn);
turnOff.addEventListener("click", buttonLampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", brokenLamp);
