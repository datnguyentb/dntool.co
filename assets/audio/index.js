const songs_list = [
    {
        name: "Perfect",
        singer: "Ed Sheeran",
        src: './assets/audio/perfect.mp3',
        famour: true,

    }
]

let isPlaying = false;
let progress = 0;
let interval;

var playPause = document.querySelector('.control_menu .play')
var audio = document.querySelector('#music_player audio')

playPause.addEventListener('click', () => {
    if (isPlaying) {
        clearInterval(interval);
    } else {
        interval = setInterval(updateProgressBar, audio.duration);
    }
    isPlaying = !isPlaying;
    if(isPlaying) {
        audio.play();
        playPause.innerHTML = '<i class="fa-solid fa-circle-pause"></i>'
    } else {
        audio.pause();
        playPause.innerHTML = '<i class="fa-solid fa-circle-play"></i>'
    }
})

function updateProgressBar() {
    progress += 0.1;
    if (progress > 100) {
        progress = 0;
        clearInterval(interval);
        isPlaying = false;
    }
    document.querySelector('.progress-bar').style.width = progress + '%';
}

document.querySelector('.progress-container').addEventListener('click', (e) => {
    const progressContainerWidth = e.currentTarget.offsetWidth;
    const clickPosition = e.offsetX;
    progress = (clickPosition / progressContainerWidth) * 100;
    document.querySelector('.progress-bar').style.width = progress + '%';
});

var updateSong = () => {
    var song_name = songs_list[0].name;
    var song_singer = songs_list[0].singer;
    var audio_link = songs_list[0].src;
    document.querySelector('.song_infor .song_name').innerHTML = `<h3>${song_name}</h3><span>${song_singer}</span>`
    audio.src = audio_link;
}

updateSong();
