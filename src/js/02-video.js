import throttle from 'lodash.throttle';

import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onUpdateTime, 1000));

function onUpdateTime(e) {
  // console.log(e);
  let currentTime = e;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
}
const currentTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(currentTime);


player.setCurrentTime(parsedTime.seconds)
// console.log(parsedTime.seconds)
