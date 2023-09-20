const songs = [
    {autor: "Beyonce", title: "Don't Hurt Yourself", url: "url(assets/img/lemonade.png)"},
    {autor: "Dua Lipa", title: "Don't Start Now", url: "url(assets/img/dontstartnow.png)"},
];

let counter = 0;

function next() {
    counter = (counter + 1) % songs.length;
    newSong(counter);
}

function before() {
    counter = (counter - 1) > -1 ? counter - 1 : songs.length-1;
    newSong(counter);
}
function newSong(count){
    document.getElementById("title").textContent = songs[count].title;
    document.getElementById("autor").textContent = songs[count].autor;
    document.body.style.backgroundImage = songs[count].url;
    document.getElementById("image_albom").style.backgroundImage = songs[count].url;
}