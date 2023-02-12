function displaytime() {
    let a = new Date();
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    if (h > 12)
        document.getElementById('sess').innerHTML = 'PM'
    if (h > 12) {
        h = h - 12
    }
    if (h < 10)
        h = '0' + h
    if (m < 10)
        m = '0' + m
    if (s < 10)
        s = '0' + s
    document.getElementById('hours').innerHTML = h
    document.getElementById('minutes').innerHTML = m
    document.getElementById('sec').innerHTML = s
}
setInterval(displaytime, 10)


