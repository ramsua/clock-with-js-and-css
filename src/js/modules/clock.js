import { rootVars } from "../config/global_vars";
import { getCurrentTime as date } from "./date";

const analogicClock = () => {

    const time = date()

    rootVars.setProperty('--ht-hours', `${time.hours * 30}deg`)
    rootVars.setProperty('--ht-minutes', `${time.minutes * 6}deg`)
    rootVars.setProperty('--ht-seconds', `${time.seconds * 6}deg`)

    setInterval(() => {

        // Se iba a usar recursividad
        // pero tiene un límite de llamados así que
        // Dentro de lo que sé esto es lo que pude hacer.
        // Per SÉ también, que no se debe repetir código

        const time = date()

        rootVars.setProperty('--ht-hours', `${time.hours * 30}deg`)
        rootVars.setProperty('--ht-minutes', `${time.minutes * 6}deg`)
        rootVars.setProperty('--ht-seconds', `${time.seconds * 6}deg`)

    }, 1000);
}

export { analogicClock }