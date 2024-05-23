export default function HandleBackground () {
  let hours = (new Date()).getHours();
  const videoSource = document.querySelector('.videoSource');
  if (hours > 18 && hours < 6) {
    videoSource.setAttribute('src', '/videos/Studio_night.mp4');
    console.log('kmk');
  } else {
    videoSource.setAttribute('src', '/videos/Studio_day.mp4');
  }
}