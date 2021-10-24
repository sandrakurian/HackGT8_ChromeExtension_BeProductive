const timerStart = document.getElementById("timerStart");
const timerStop = document.getElementById("timerStop");
const timerResume = document.getElementById("timerResume");

timerStart.onclick = function() {
    startTimer()
};

timerStop.onclick = function() {
    stopTimer();
};

timerResume.onclick = function() {
    resumeTimer();
};