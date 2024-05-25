import { musics } from "~/mock-data";

export default function HandleControls () {
  const video = document.querySelector('.video');
  const audio = document.querySelector('.audio');
  
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
  let indexSong = 0;

  audio.setAttribute('src', musics[indexSong].url)
  btnPlay.addEventListener('click', PlayPause)

  btnNext.addEventListener('click', () => {
    ChangeSong(1);
  })

  btnPrev.addEventListener('click', () => {
    ChangeSong(-1);
  })

  function PlayPause () {
    if (isPlaying === true) {
      btnPlay.setAttribute('src', '/images/play-icon.svg');
      video.pause();
      audio.pause();
      isPlaying = false;
    } else {
      btnPlay.setAttribute('src', '/images/pause-icon.svg');
      video.play();
      audio.play();
      isPlaying = true;
    }
  }

  function ChangeSong (currentSong) {
    if (currentSong === 1) {

      if (indexSong >= musics.length - 1) {
        indexSong = 0;
        audio.setAttribute('src', musics[indexSong].url)
        isPlaying = false
        PlayPause()
      } else {
        indexSong++;
        audio.setAttribute('src', musics[indexSong].url)
        isPlaying= false
        PlayPause()
      }
      
    } else if (currentSong === -1) {
    
      if (indexSong <= 0) {
        indexSong = musics.length - 1;
        audio.setAttribute('src', musics[indexSong].url)
        isPlaying= false
        PlayPause()
      } else {
        indexSong--;
        audio.setAttribute('src', musics[indexSong].url)
        isPlaying= false
        PlayPause()
      }
    }
  }

}