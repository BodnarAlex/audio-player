const songs = [
    { autor: "Beyonce", title: "Don't Hurt Yourself", url: "url(assets/img/lemonade.png)", song: 'assets/audio/beyonce.mp3' },
    { autor: "Dua Lipa", title: "Don't Start Now", url: "url(assets/img/dontstartnow.png)", song: 'assets/audio/assets_audio_dontstartnow.mp3' },
];

let isPlay = false;
let counter = 0;
const audio = new Audio();
audio.src = songs[counter].song;

audio.addEventListener('timeupdate', function () {
    document.getElementById("start_song").textContent = getCorrectTimeformat(audio.currentTime);
    if (audio.currentTime == audio.duration)
        next();

    console.log('false');
    if (audio.currentTime != 0)
        document.getElementById("progress").value = audio.currentTime * 1000 / audio.duration;
    else
        document.getElementById("progress").value = 0;

}, false);


audio.onloadeddata = function () {
    let duration = getCorrectTimeformat(audio.duration);
    document.getElementById("end_song").textContent = duration;
}

function next() {
    counter = (counter + 1) % songs.length;
    newSong(counter);
}

function before() {
    counter = (counter - 1) > -1 ? counter - 1 : songs.length - 1;
    newSong(counter);
}

function newSong(count) {
    isPlay = false;
    audio.src = songs[counter].song;
    document.getElementById("title").textContent = songs[count].title;
    document.getElementById("autor").textContent = songs[count].autor;
    document.getElementById("image_albom").style.backgroundImage = songs[count].url;
    document.body.style.backgroundImage = songs[count].url;
    document.getElementsByClassName("play")[0].classList.remove('stop');
}

function control() {
    if (!isPlay) {
        isPlay = true;
        audio.play();
    } else {
        isPlay = false;
        audio.pause();
    }
    document.getElementById("image_albom").classList.toggle('scale');
    document.getElementsByClassName("play")[0].classList.toggle('stop');
}

function otherTime() {
    let needTime = document.getElementById("progress").value * audio.duration / 1000;
    audio.currentTime = needTime;
    document.getElementById("start_song").textContent = getCorrectTimeformat(needTime);
}

function getCorrectTimeformat(sec) {
    let secs = Math.floor(sec % 60);
    secs = secs > 9 ? secs : '0' + secs;
    return Math.trunc(sec / 60) + ':' + secs;
}
