// const ipc = require('electron').ipcRenderer

const audio = document.getElementById("myAudio");
title = document.getElementById("song-title");
album = document.getElementById("vinyl-album");
song_album = document.getElementById("song-album");
song_artist = document.getElementById("song-artist");

prev = document.getElementById("prev-button");
next = document.getElementById("next-button");
exit_button = document.getElementById("exit-button").addEventListener("click", closeApp);;
progress = document.getElementById("progress");
progress_bar = document.getElementById("progress-bar");


const songs = [
    "taylor swift - should've said no", 'taylor swift - you belong with me',
    'taylor swift - ours', 'taylor swift - all too well (10 minute version)',
    'taylor swift - out of the woods', 'taylor swift - delicate',
    'taylor swift - the archer', 'taylor swift - my tears ricochet',
    'taylor swift - champagne problems', "taylor swift - would've, could've, should've",
    'taylor swift - peter'
];

const song_title = [
    "Should've Said No", 'You Belong With Me', 'Ours', 'All Too Well (10 Minute Version)', 'Out Of The Woods', 'Delicate',
    'The Archer', 'my tears ricochet', 'champagne problems', "Would've, Could've, Should've", 'Peter'
];

const album_song = [
    "vinyl-ts", "vinyl-fearless", "vinyl-speaknow", "vinyl-red", "vinyl-1989", "vinyl-reputation",
    "vinyl-lover", "vinyl-folklore", "vinyl-evermore", "vinyl-midnights", "vinyl-ttpd"
];

const album_title = [
    'Taylor Swift (debut)','Fearless','Speak Now','Red','1989','reputation',
    'Lover','folklore','evermore','Midnights','The Tortured Poets Department'
]

function controlAudio(action) {
    if (!audio) {
        console.error("Audio element not found");
        return;
    }
    if (action === "play") { audio.play(); } 
    else if (action === "pause") { audio.pause(); }
}

let songIndex = 0;

function load_song(song_file, alb, song_title, song_alb) {
    title.innerText = song_title;
    song_album.innerText = song_alb;
    song_artist.innerText = "Taylor Swift";
    audio.src = `audio/${song_file}.mp3`;
    album.src = `assests/albums/${alb}.png`
}

prev.addEventListener('click', prevSong)
next.addEventListener('click', nextSong)

function prevSong() {
    songIndex--;
    if (songIndex < 0) { songIndex = songs.length - 1; }
    load_song(songs[songIndex], album_song[songIndex], song_title[songIndex], album_title[songIndex]);
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) { songIndex = 0; }
    load_song(songs[songIndex], album_song[songIndex], song_title[songIndex], album_title[songIndex]);
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress_bar.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration;
}

progress.addEventListener('click', setProgress);
audio.addEventListener('timeupdate', updateProgress);


function closeApp(e) {
    //e.preventDefault();
    //ipc.send('close');
    window.close();
}

