export default function HandleBackground () {
  const hours = (new Date()).getHours();
  const videoSource = document.querySelector('.videoSource');
  if (hours > 18 && hours < 6) {
    videoSource.setAttribute('src', '/videos/Studio_night.mp4');
  } else {
    videoSource.setAttribute('src', '/videos/Studio_day.mp4');
  }
}