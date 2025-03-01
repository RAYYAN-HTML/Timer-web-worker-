let counter = 0;
let timerRunning = false;
let timer; // Store interval reference

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timer = setInterval(() => {
            counter++;
            postMessage(counter);
        }, 1000);
    }
}

onmessage = function (event) {
    if (event.data === "Worker is on duty!") {
        startTimer();
    } else if (event.data === "stop") {
        clearInterval(timer);
        timerRunning = false;
    }
};
