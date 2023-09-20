const songs = [
    ["Beyonce", "Don't Hurt Yourself", "url(assets/img/lemonade.png)"],
    ["Dua Lipa", "Don't Start Now", "url(assets/img/dontstartnow.png)"]
];

let counter = 0;

function next() {
    counter = (counter + 1) % songs.length;
    document.getElementById("image_albom").style.backgroundImage = songs[counter][2];
    document.body.style.backgroundImage = songs[counter][2];
    document.getElementById("title").textContent = songs[counter][1];
    document.getElementById("autor").textContent = songs[counter][0];
}

function before() {
    counter = (counter - 1) > -1 ? counter - 1 : songs.length-1;
    document.getElementById("image_albom").style.backgroundImage = songs[counter][2];
    document.body.style.backgroundImage = songs[counter][2];
    document.getElementById("title").textContent = songs[counter][1];
    document.getElementById("autor").textContent = songs[counter][0];
}