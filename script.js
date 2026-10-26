window.onload = function() {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let Interval;

    let appendMinutes = document.querySelector('#minutes');
    let appendSeconds = document.querySelector('#seconds');
    let appendTens = document.querySelector('#tens');

    let toggleBtn = document.querySelector('#toggle');
    let isRunning = false;

    let resetBtn = document.querySelector('#reset');

    const startTimer = () => {
        tens++;

        // change tens
        appendTens.innerHTML =
            tens <= 9 ? '0' + tens : tens ;

        // change seconds
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML =
                seconds <= 9 ? '0' + seconds : seconds;

            // reset tens
            tens = 0;
            appendTens.innerHTML = '00';
        }

        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML =
                minutes <= 9 ? '0' + minutes : minutes;

            // reset seconds
            seconds = 0;
            appendSeconds.innerHTML = '00';
        }
    }

    toggleBtn.addEventListener("click", () => {
        if (isRunning) {
            clearInterval(Interval);
            toggleBtn.innerHTML = "Start";
            isRunning = false;
        } else {
            Interval = setInterval(startTimer, 10);
            toggleBtn.innerHTML = "Stop";
            isRunning = true;
        }
    });

    resetBtn.addEventListener("click", () => {
        clearInterval(Interval);
        toggleBtn.innerHTML = "Start";
        isRunning = false;
        
        minutes = 0;
        seconds = 0;
        tens = 0;

        appendMinutes.innerHTML = "00";
        appendSeconds.innerHTML = "00";
        appendTens.innerHTML = "00";
    });
}