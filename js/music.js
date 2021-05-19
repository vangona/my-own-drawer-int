const myaudio = document.querySelector("audio"),
    PLAYING_CN = "playing"

let vol = 0,
    volInterval = 150;

function fadeOut () {
    const fadeout = setInterval(function() {
        if (vol > 0.1) {
            vol -= 0.1;
            myaudio.volume = vol;
            if (vol <= 0.1) {
                myaudio.classList.remove(PLAYING_CN);
                myaudio.pause();
                clearInterval(fadeout);
            }
        }
    }, 100);
}

function fadeIn () {
    const fadein = setInterval(function() {
        if (vol < 0.5) {
            vol += 0.05;
            myaudio.volume = vol;
        } else {
            clearInterval(fadein);
        }
    }, volInterval);
}

function handleClick(){
    if (myaudio.classList.contains(PLAYING_CN)) {
        fadeOut();
    } else {
        myaudio.volume = vol;
        myaudio.play();
        myaudio.classList.add(PLAYING_CN);
        fadeIn();
    }
}


function init() {
    title.addEventListener("click", handleClick);
    guide.addEventListener("click", handleClick);
}

init();