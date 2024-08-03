'use strict'

const date = document.querySelector('.date');
const time = document.querySelector('.time');
let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Срeда', 'Четверг', 'Пятница', 'Суббота']
function currentTime () {
  let today = new Date();
  let year = today.getFullYear();
  let month = (today.getMonth()+1).toString().padStart(2, '0');
  let day = today.getDate().toString().padStart(2, '0');
  let weekDay = week[today.getDay()];
  date.textContent = `${year}-${month}-${day} ${weekDay}`;

  let hours = today.getHours().toString().padStart(2, '0');
  let minutes = today.getMinutes().toString().padStart(2, '0');
  let seconds = today.getSeconds().toString().padStart(2, '0');
  time.textContent = `${hours}:${minutes}:${seconds}`;
  setTimeout(currentTime, 1000);
}
currentTime();

function setZoom() {
  if (window.matchMedia('(min-width: 360px) and (max-width: 1280px)').matches) {
  document.body.style.zoom = "45%";
  } else {
  document.body.style.zoom = "100%";
  }
}
setZoom();
window.addEventListener('resize', setZoom);
