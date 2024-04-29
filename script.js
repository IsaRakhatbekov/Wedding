const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');
const targetDate = new Date('June 21, 2024 17:00:00');
function updateCounter() {
    const currentTime = new Date();
    const diff = targetDate - currentTime;
    const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
    days.innerText = daysLeft;
    const hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}
updateCounter();
setInterval(updateCounter, 1000);
setTimeout(function () {
    preloader.remove();
}, 1000);




window.onload = function() {
  const body = document.querySelector('body')
  const first = document.querySelector('.splash__titles-first')
  const second = document.querySelector('.splash__titles-second')
  const third = document.querySelector('.splash__titles-third')
  const fourth = document.querySelector('.splash__titles-fourth')
  const splash = document.querySelector('.splash')

    setTimeout(function() {
      first.classList.add('active')
      third.classList.add('active')
      second.classList.add('active')
      fourth.classList.add('active')
    }, 1000);

    setTimeout(function() {
      splash.classList.add('active')
      splash.classList.remove('lock')
      body.classList.remove('lock')
    }, 3000);
};