import React from "react";

export default function Dateandtime() {let h2 = document.querySelector("#day-time");
let today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();

if (minutes < 10) {
  minutes = "0" + today.getMinutes();
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[today.getDay()];

h2.innerHTML = `${day} | ${hours}:${minutes}`;
}