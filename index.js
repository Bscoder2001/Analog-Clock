console.log('Welcome to my profile');

setInterval(() => {
    date = new Date();
    let htime = date.getHours();
    let mtime = date.getMinutes();
    let stime = date.getSeconds();

    hrotation = 30*htime + 1/2 * mtime;
    mrotation = 6 * mtime + 1/10 * stime;
    srotation =  6 * stime;

    let hour = document.getElementById('hour')
    let minute = document.getElementById('minute')
    let seconds = document.getElementById('seconds')
    // console.log(date)
     
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;

}, 1000);