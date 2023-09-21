const songs = [
    {autor: "Beyonce", title: "Don't Hurt Yourself", url: "url(assets/img/lemonade.png)", song:'assets/audio/beyonce.mp3'},
    {autor: "Dua Lipa", title: "Don't Start Now", url: "url(assets/img/dontstartnow.png)", song:'assets/audio/assets_audio_dontstartnow.mp3'},
];

let counter = 0;
const audio = new Audio();

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
    console.log(audio);
    document.getElementById("title").textContent = songs[count].title;
    document.getElementById("autor").textContent = songs[count].autor;
    document.body.style.backgroundImage = songs[count].url;
    document.getElementById("image_albom").style.backgroundImage = songs[count].url;

    audio.onloadeddata = function(){
        var durationSec =  audio.duration;
        let duration = Math.trunc(durationSec / 60) + ':' + Math.floor(durationSec % 60);
        document.getElementById("end_song").textContent = duration;
    }
}


function play(){
    audio.play();
    document.getElementsByClassName("play")[0].style.display = 'none';
    document.getElementsByClassName("stop")[0].style.display = 'block';
}


function stop(){
    audio.pause();
    document.getElementsByClassName("stop")[0].style.display = 'none';
    document.getElementsByClassName("play")[0].style.display = 'block';
}