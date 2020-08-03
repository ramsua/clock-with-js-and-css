const getCurrentTime = () => {

    let time = new Date
    let year = time.getFullYear()
    let month = time.getMonth() + 1
    let date = time.getDate()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()

    return {
        year, month, date, hours, minutes, seconds
    }
}

export { getCurrentTime }