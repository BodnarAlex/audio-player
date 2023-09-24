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

console.log('Вёрстка +10');
console.log('   вёрстка аудиоплеера: есть кнопка Play/Pause, кнопки "Вперёд" и "Назад" для пролистывания аудиотреков, прогресс-бар, отображается название и автор трека +5');
console.log('   в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5');
console.log('Кнопка Play/Pause +10');
console.log('   есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание аудиотрека +5');
console.log('   внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент аудиотрек +5');
console.log('При кликах по кнопкам "Вперёд" и "Назад" переключается проигрываемый аудиотрек. Аудиотреки пролистываются по кругу - после последнего идёт первый +10');
console.log('При смене аудиотрека меняется изображение - обложка аудиотрека +10');
console.log('Прогресс-бар отображает прогресс проигрывания текущего аудиотрека. При перемещении ползунка вручную меняется текущее время проигрывания аудиотрека +10');
console.log('Отображается продолжительность аудиотрека и его текущее время проигрывания +10');
console.log('Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +0');
