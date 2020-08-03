const getCurrentTime = () => {

    let time = new Date
    let year = time.getFullYear()
    let month = time.getMonth() + 1
    let date = time.getDate()
    let hours = ("0" + time.getHours()).slice(-2)
    let minutes = ("0" + time.getMinutes()).slice(-2)
    let seconds = ("0" + time.getSeconds()).slice(-2)

    return {
        year, month, date, hours, minutes, seconds
    }
}

export { getCurrentTime }