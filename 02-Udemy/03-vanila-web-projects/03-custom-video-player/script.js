const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = `<ion-icon class="icon" name="play"></ion-icon>`;
  } else {
    play.innerHTML = `<ion-icon class='icon' name="pause"></ion-icon>`;
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
function stopVideo() {
  video.pause();
  video.currentTime = 0;
  play.innerHTML = `<ion-icon class='icon' name="play"></ion-icon>`;
}
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}
/*update video */
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
