const timeElem = document.querySelector(".watch .time");
const startElem = document.getElementById("start");
const stopElem = document.getElementById("stop");
const resetElem = document.getElementById("reset");

let seconds = 0;
let interval = null;

// addEventListener
startElem.addEventListener('click', start);
stopElem.addEventListener("click", stop);
resetElem.addEventListener("click", reset);

function timer() {
    seconds++;

    // format our time  
     let hrs = Math.floor(seconds / 3600);
     let min = Math.floor((seconds - (hrs * 3600)) / 60);
     let sec = seconds % 60;
    
     if(sec < 10) sec = "0" + sec;
     if(min < 10) min = "0" + min;
     if(hrs < 10) hrs = "0" + hrs;

     timeElem.innerText = `${hrs}:${min}:${sec}`

}


function start () {
    if(interval) {
        return
    }
   interval = setInterval(timer,1000);
}

function stop () {
    clearInterval(interval);
    interval = null;
}

function reset () {
    stop();
    seconds = 0;
    timeElem.innerText = "00:00:00";
}