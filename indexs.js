const input = document.querySelectorAll('.input');
const hour = input[0];
const min = input[1];
const sec = input[2];
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

let count;

start.addEventListener('click', () => {
    stop.style.display = "initial";
    start.style.display = "none";

    // Ensure the timer starts only if all values are not zero
    if (hour.value === "00" && min.value === "00" && sec.value === "00") {
        return;
    }

    count = setInterval(() => {
        time();
    }, 1000);
});

function time() {
    let h = parseInt(hour.value, 10);
    let m = parseInt(min.value, 10);
    let s = parseInt(sec.value, 10);

    // Handle seconds
    if (s > 0) {
        s--;
    } else if (m > 0) {
        m--;
        s = 59;
    } else if (h > 0) {
        h--;
        m = 59;
        s = 59;
    }

    // Update the input fields with leading zeroes
    hour.value = h < 10 ? `0${h}` : `${h}`;
    min.value = m < 10 ? `0${m}` : `${m}`;
    sec.value = s < 10 ? `0${s}` : `${s}`;

    // Stop the interval when time reaches zero
    if (h === 0 && m === 0 && s === 0) {
        stopInterval();
    }
}

function stopInterval() {
    start.innerHTML = "Start";
    stop.style.display = "none";
    start.style.display = "initial";
    clearInterval(count);
}

stop.addEventListener('click', () => {
    stopInterval();
});

reset.addEventListener('click', () => {
    hour.value = "00";
    min.value = "00";
    sec.value = "00";
    stopInterval();
});
