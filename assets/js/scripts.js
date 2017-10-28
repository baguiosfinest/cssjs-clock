

const hourTime = document.getElementById("hour");
const minTime = document.getElementById("min");
const secTime = document.getElementById("sec");


function setDate(){
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = (now.getHours() > 12) ? now.getHours() - 12 : date.getHours();

    /*console.log(hour + ":" + min + ":" + sec);*/

    hourTime.innerHTML = hour;
    minTime.innerHTML = min;
    secTime.innerHTML = sec;

    let handSec = document.querySelector(".sec-hand");
    handSec.setAttribute("style","transform: rotate("+(sec*6)+"deg)");

    let handMin = document.querySelector(".min-hand");
    handMin.setAttribute("style","transform: rotate("+(min*6)+"deg)");

    let handHour = document.querySelector(".hour-hand");
    handHour.setAttribute("style","transform: rotate("+(hour*30)+"deg)");

}

setInterval(setDate, 1000)