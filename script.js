const countDownDate = new Date("november 04, 2022 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function () {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);


  days > 9 ? document.getElementById("countdown-days").innerHTML = days
    : document.getElementById("countdown-days").innerHTML = "0" + days;

  hours > 9 ? document.getElementById("countdown-hours").innerHTML = hours
    : document.getElementById("countdown-hours").innerHTML = "0" + hours;

  minutes > 9 ? document.getElementById("countdown-minutes").innerHTML = minutes
    : document.getElementById("countdown-minutes").innerHTML = "0" + minutes;

  seconds > 9 ? document.getElementById("countdown-seconds").innerHTML = seconds
    : document.getElementById("countdown-seconds").innerHTML = "0" + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);