import { analogicClock } from "./modules/clock";

document.addEventListener('DOMContentLoaded', () => {

    analogicClock()

    setInterval(() => {

        analogicClock()

    }, 1000);

})