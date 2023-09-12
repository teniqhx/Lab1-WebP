function updateDigitalClock() {
    const digitalClock = document.querySelector(".digital-clock");
    const hoursElement = digitalClock.querySelector(".hours");
    const minutesElement = digitalClock.querySelector(".minutes");
    const secondsElement = digitalClock.querySelector(".seconds");

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

setInterval(updateDigitalClock, 1000);
