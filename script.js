let clock = {
    second: document.querySelector('.second-hand'),
    minute: document.querySelector('.minute-hand'),
    hour: document.querySelector('.hour-hand')
}
var digitalClock = document.querySelector('.digital-clock span');

function setDate() {
    let date = new Date;
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours() % 12;
    clock.second.style.setProperty('transform', `rotate(${(sec * 6) + 90}deg)`);
    clock.minute.style.setProperty('transform', `rotate(${(min * 6) + 90}deg)`);
    clock.hour.style.setProperty('transform', `rotate(${(hour * 30) + 90}deg)`);    
    hour = hour < 10 ? `0${hour}` : hour;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
    var ampm = date.getHours() > 12 ? 'PM' : 'AM'
    digitalClock.textContent = `${hour} : ${min} : ${sec} ${ampm}`;
    var audio = document.querySelector('audio');
    audio.volume = .3;
    audio.play();
}

setInterval( setDate, 1000 );