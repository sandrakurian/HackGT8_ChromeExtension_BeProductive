// source: https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak (this is a stopwatch, using it to make it a countdown/timer)


const timer = document.getElementById('stopwatch');
const HR = 1;
const MIN = 0;
const SEC = 0;

var hr = HR;
var min = MIN;
var sec = SEC;
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
  }
}

function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);


    if (hr == 0 && min == 0 && sec == 0) {
      stopTimer();
      return;
    }

    sec = sec - 1;

    if (sec == -1) {
      hr = hr
      min = min - 1;
      sec = 59;
      if (min == -1 && hr > 0) {
        hr = hr - 1;
        min = 59;
        sec = 59;
      }
    }

    // if (min == 0 && hr > 0) {
    //   hr = hr - 1;
    //   min = 60;
    //   sec = 0;
    // }
    

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
    // setTimeout("timerCycle()", 250); // testing
  }
}

function resetTimer() {
  hr = HR;
  min = MIN;
  sec = SEC;
  stoptime = true;

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