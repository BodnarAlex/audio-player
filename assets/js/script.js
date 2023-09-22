const songs = [
    {autor: "Beyonce", title: "Don't Hurt Yourself", url: "url(assets/img/lemonade.png)", song:'assets/audio/beyonce.mp3'},
    {autor: "Dua Lipa", title: "Don't Start Now", url: "url(assets/img/dontstartnow.png)", song:'assets/audio/assets_audio_dontstartnow.mp3'},
];

let counter = 0;
let correctTimer = 0;
const audio = new Audio();
audio.src = songs[counter].song;

audio.addEventListener('timeupdate',function (){
    document.getElementById("start_song").textContent = getCorrectTimeformat(audio.currentTime);
    document.getElementById("progress").value = audio.currentTime * 500 / audio.duration;
});

audio.onloadeddata = function(){
    let duration = getCorrectTimeformat(audio.duration);
    document.getElementById("end_song").textContent = duration;
}

function next() {
    counter = (counter + 1) % songs.length;
    newSong(counter);
}

function before() {
    counter = (counter - 1) > -1 ? counter - 1 : songs.length-1;
    newSong(counter);
}

function newSong(count){
    audio.src = songs[counter].song;
    document.getElementById("title").textContent = songs[count].title;
    document.getElementById("autor").textContent = songs[count].autor;
    document.body.style.backgroundImage = songs[count].url;
    document.getElementById("image_albom").style.backgroundImage = songs[count].url;
    document.getElementsByClassName("stop")[0].style.display = 'none';
    document.getElementsByClassName("play")[0].style.display = 'block'
}

function play(){
    audio.play();
    document.getElementsByClassName("play")[0].style.display = 'none';
    document.getElementsByClassName("stop")[0].style.display = 'block';
}

function stop(){
    correctTimer = audio.currentTime;
    audio.pause();
    document.getElementsByClassName("stop")[0].style.display = 'none';
    document.getElementsByClassName("play")[0].style.display = 'block';
}

function otherTime(){
    let needTimeInterest = document.getElementById("progress").value;
    let needTime = getCorrectTimeformat(needTimeInterest * audio.duration / 500);
    document.getElementById("start_song").textContent = needTime;
    audio.currentTime = needTimeInterest * audio.duration / 500;
}

function getCorrectTimeformat(sec){
    let secs = Math.floor(sec % 60); 
    secs = secs > 9 ? secs : '0'+ secs;
    return Math.trunc(sec / 60) + ':' +  secs;
}