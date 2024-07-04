// script.js
let startTime, elapsedTime = 0, intervalId;
const display = document.getElementById('display');
const laps = document.getElementById('laps');

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}.${formattedMS}`;
}

function start() {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.textContent = timeToString(elapsedTime);
    }, 10);
}

function pause() {
    clearInterval(intervalId);
}

function reset() {
    clearInterval(intervalId);
    display.textContent = "00:00.00";
    elapsedTime = 0;
    laps.innerHTML = '';
}

function lap() {
    const lapTime = timeToString(elapsedTime);
    const lapElement = document.createElement('div');
    lapElement.textContent = lapTime;
    laps.appendChild(lapElement);
}

document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('lap').addEventListener('click', lap);
