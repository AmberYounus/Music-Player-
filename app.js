const musicContainer = document.getElementById("music-container")
const playBtn = document.getElementById("play")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
const audio = document.getElementById("audio")
const prog = document.getElementById("progress")
const progCont = document.getElementById("progress-container")
const title = document.getElementById("title")
const cover = document.getElementById("cover")

//Song Titles 
const songs = ["happyrock" , "jazzyfrenchy" ,"ukulele"]
//keep track of song
let songIndex = 0
//Initially load song details into DOM
loadSong(songs[songIndex])
//Update detail song
function loadSong(song) {
    title.innerText = song
    
}

//Play the Song
function playSong() {
    musicContainer.classList.add("play")
    playBtn.querySelector("i.fa").classList.remove("fa-play")
    playBtn.querySelector("i.fa").classList.add("fa-pause")
    audio.play()
}

//Pause the song
function pauseSong() {
    musicContainer.classList.remove("play")
    playBtn.querySelector("i.fa").classList.add("fa-play")
    playBtn.querySelector("i.fa").classList.remove("fa-pause")
    audio.pause()
}

//Play previous song
function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length-1
    }
    loadSong(songs[songIndex])
    playSong()
}
//Play Next Song
function nextSong(){
    songIndex++;
    if(songIndex>songs.length -1){
        songIndex = 0
    }
    loadSong(songs[songIndex])
    playSong
}

//Update Progress Bar
function updateProgress(e){
    const{duration,currentTime} = e.srcElement
    const progressPerCent = (currentTime/duration)* 100
    prog.style.width = `${progressPerCent}`
}

//SetThe progress
function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration
    audio.currentTime =(clickX/width)* duration
}

//Event the listener
playBtn.addEventListener("click" ,()=>{
    const isPlaying = musicContainer.classList.contains("play")
    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})

//Change song
prevBtn.addEventListener("click" ,prevSong)
nextBtn.addEventListener("click" ,nextSong)

//Update SOng
audio.addEventListener("timeupdate",updateProgress)

//CLikc on progress BAr
progCont.addEventListener("click",setProgress)

//End Song
audio.addEventListener("ended",nextSong)

