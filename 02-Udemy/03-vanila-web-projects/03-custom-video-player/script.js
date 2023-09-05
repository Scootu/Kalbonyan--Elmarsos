const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

const audio = document.getElementById("audio");
const playAudio = document.getElementById("play-audio");
const progressAudio = document.getElementById("progress-audio");
const timestampAudioStart = document.getElementById("timestamp-audio-start");
const timestampAudioDuration = document.getElementById("timestamp-audio-end");

function setAudioDuration() {
  let min = Math.floor(audio.duration / 60);
  let sec = Math.floor(audio.duration % 60);
  console.log('audio :' ,audio.duration);
  if (min < 10) {
    min = "0" + String(min);
  }
  if (sec < 10) {
    sec = "0" + String(sec);
  }
  timestampAudioDuration.innerHTML = `${min}:${sec}`;
}
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function toggleAudioStatus() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = `<ion-icon class="icon" name="play"></ion-icon>`;
  } else {
    play.innerHTML = `<ion-icon class='icon' name="pause"></ion-icon>`;
  }
}
function updatePlayIconAudio() {
  if (audio.paused) {
    playAudio.innerHTML = `<ion-icon class="icon" name="play"></ion-icon>`;
  } else {
    playAudio.innerHTML = `<ion-icon class='icon' name="pause"></ion-icon>`;
  }
}

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }
  timestamp.innerHTML = `${mins}:${secs}`;
}
function updateProgressAudio() {
  progressAudio.value = (audio.currentTime / audio.duration) * 100;

  let mins = Math.floor(audio.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }
  let secs = Math.floor(audio.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }
  timestampAudioStart.innerHTML = `${mins}:${secs}`;
}
function stopVideo() {
  video.pause();
  video.currentTime = 0;
  play.innerHTML = `<ion-icon class='icon' name="play"></ion-icon>`;
}

function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}
function setAudioProgress() {
  audio.currentTime = (+progressAudio.value * audio.duration) / 100;
}

setAudioDuration();
/*update video */

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("pause", updatePlayIcon);

video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
/*Audio */
audio.addEventListener("play", updatePlayIconAudio);
audio.addEventListener("pause", updatePlayIconAudio);
audio.addEventListener("timeupdate", updateProgressAudio);
playAudio.addEventListener("click", toggleAudioStatus);

progressAudio.addEventListener("change", setAudioProgress);
