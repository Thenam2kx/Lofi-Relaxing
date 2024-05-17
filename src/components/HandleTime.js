
export default function HandleTime () {
  setInterval(()=>{
    const date = new Date();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    document.querySelector('.time--wrapper').innerHTML = `${hours} : ${minutes}`;
  }, 1000);
  
}