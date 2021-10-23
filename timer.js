// source: https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak (this is a stopwatch, using it to make it a countdown/timer)


const timer = document.getElementById('stopwatch');

var hr = 1;
var min = 0;
var sec = 3;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
    timer.innerHTML = "00:00:00";
  }
}

function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec - 1;

    if (hr == 0 && min == 0 && sec == 0) {
      stopTimer();
      return;
    }

    
    if (min == 0) {
      hr = hr - 1;
      min = 60;
      sec = 60;
    }
    if (sec == 0) {
      hr = hr
      min = min - 1;
      sec = 59;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
  sec = parseInt(sec);
  min = parseInt(min);
  hr = parseInt(hr);

  if (sec < 10) {
    sec = '0' + sec;
  }
  if (min < 10) {
    min = '0' + min;
  }
  if (hr < 10 ) {
    hr = '0' + hr;
  }

  timer.innerHTML = hr + ':' + min + ':' + sec;
}