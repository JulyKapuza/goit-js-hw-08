import throttle from 'lodash.throttle';

import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onUpdateTime, 1000));

function onUpdateTime(e) {

  let currentSecond = e.seconds;
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(currentSecond)
  );
}

const currentTime = localStorage.getItem('videoplayer-current-time');

let timeData = 0;

function checkTime(currentTime) {
  if (currentTime) {
    timeData = JSON.parse(currentTime);
  } else {
    timeData = 0;
  }
}

checkTime(currentTime);

player.setCurrentTime(timeData)
console.log(timeData);
