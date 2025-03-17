var hourUp = document.getElementById("js--hour-up");
var hourDown = document.getElementById("js--hour-down");
var hour = 0;
var timeHour = document.getElementById("js--time-hour");
var timeMinute = document.getElementById("js--time-minute")
var minuteUp = document.getElementById("js--minute-up");
var minuteDown = document.getElementById("js--minute-down");
var minute = 0;
hourUp.onclick = function () {
    hour += 1;

    if (hour > 23) {
        hour = 0;
    }
    if (hour < 10) {
        timeHour.innerText = "0" + hour;
    }
    else {
        timeHour.innerText = hour;
    }

}

hourDown.onclick = function () {
    hour -= 1;

    if (hour < 0) {
        hour = 23;
    }
    if (hour < 10) {
        timeHour.innerText = "0" + hour;
    }
    else {
        timeHour.innerText = hour;
    }



}
var minuteUP = document.getElementById("js--minute-up");
var minuteDown = document.getElementById("js--minute-down");

minuteUp.onclick = function () {
    minute += 1;

    if (minute > 59) {
        minute = 0;
    }
    if (minute < 10) {
        timeMinute.innerText = "0" + minute;
    }
    else {
        timeMinute.innerText = minute;
    }


}

minuteDown.onclick = function () {
    minute -= 1;

    if (minute < 0) {
        minute = 59;
    }
    if (minute < 10) {
        timeMinute.innerText = "0" + minute;
    }
    else {
        timeMinute.innerText = minute;
    }


}

var toggle = document.getElementById("js--toggle");
toggle.checked = false;
var timer = null;
var getTimerOut = null;
var getTimerIn = null;
var dialogue = document.getElementById("js--dialogue");
var dialogueT = document.getElementById("js--dialogue-T");
var audio = new Audio("/sound/501880__greenworm__cellphone-alarm-clock.mp3");

toggle.onchange = function () {
    if (toggle.checked === true) {
        dialogue.innerText = "Je alarm is gezet op " + hour + " uur en " + minute + " minuten ";
        toggle.classList.add("alarm__toggle--checked");
        dialogue.style.display = "flex";
        dialogueT.style.display = "none";

        getTimerOut = setTimeout(function(){
            dialogue.style.display = "none";
        }, 3500)

        timer = setInterval(function () {
            var date = new Date();
            var dateHour = date.getHours();
            var dateMinute = date.getMinutes();

            if (hour === dateHour && minute === dateMinute) {
                audio.play();

            }

        }, 2000);

        clearTimeIn(getTimerIn);
    }
    else {
        audio.pause();
        clearInterval(timer);
        toggle.classList.remove("alarm__toggle--checked");
        clearTimeout(getTimerOut);
        dialogue.style.display = "none";
        dialogueT.style.display = "flex";
        getTimerIn = setTimeout(function(){
            dialogueT.style.display = "none"
        }, 3500)
    }
}



