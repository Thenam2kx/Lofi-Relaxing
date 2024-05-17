export default function HandleControls () {

  const video = document.querySelector('.video');

  const btnHome = document.querySelector('.btnHome');

  const btnPrev = document.querySelector('.btnPrev');
  const btnPlay = document.querySelector('.btnPlay');
  const btnNext = document.querySelector('.btnNext');
  const btnVolOn = document.querySelector('.btnVolOn');
  const btnVolOff = document.querySelector('.btnVolOff');

  const btnMixer = document.querySelector('.btnMixer');
  const btnTemplates = document.querySelector('.btnTemplates');
  const btnScenes = document.querySelector('.btnScenes');
  const btnLofiAI = document.querySelector('.btnLofiAI');
  const btnTool = document.querySelector('.btnTool');

  const btnPipMode = document.querySelector('.btnTool');
  const btnFullScreen = document.querySelector('.btnFullScreen');

  let isPlaying = false;

  btnPlay.addEventListener('click', () => {
    if (isPlaying === true) {
      btnPlay.setAttribute('src', '/images/play-icon.svg');
      video.play();
      isPlaying = false;
    } else {
      btnPlay.setAttribute('src', '/images/pause-icon.svg');
      video.pause();
      isPlaying = true;
    }
    
  })
}