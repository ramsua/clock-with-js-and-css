import { getCurrentTime as date } from "./date";

const clock = document.getElementById('clock');

const elem = () => {

    const time = date()
    clock.textContent = `${time.hours} : ${time.minutes} : ${time.seconds}`

    setInterval(() => {
        const time = date()
        clock.textContent = `${time.hours} : ${time.minutes} : ${time.seconds}`
    }, 1000);
}
export { elem }