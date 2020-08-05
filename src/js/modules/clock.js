import { rootVars } from "../config/global_vars";
import { getCurrentTime as date } from "./date";

const analogicClock = () => {

    const time = date()

    rootVars.setProperty('--ht-hours', `${time.hours * 30}deg`)
    rootVars.setProperty('--ht-minutes', `${time.minutes * 6}deg`)
    rootVars.setProperty('--ht-seconds', `${time.seconds * 6}deg`)
}

export { analogicClock }