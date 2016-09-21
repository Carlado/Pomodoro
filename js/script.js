//Is the app currently counting?
var counting = false;

var timer = document.querySelector(".time");

function setTime() {
  counting = true;
  window.interval = setInterval(function() {
      var audio = new Audio("http://www.soundjig.com/pages/soundfx/beeps.php?mp3=beep1.mp3");
      timerArr = timer.innerHTML.split(':');
      var minutes = parseInt(timerArr[0], 10);
      var seconds = parseInt(timerArr[1], 10);
      seconds -= 1;
      if (minutes < 0) {
        return clearInterval(interval)
      }
      if (seconds < 0 && minutes != 0) {
        minutes -= 1;
        seconds = 59;
      } else if (seconds < 10 && length.seconds != 2) {
        seconds = '0' + seconds
      }
      timer.innerHTML = minutes + ':' + seconds;
      window.minuteSeconds = minutes + ':' + seconds;

      if (minutes == 0 && seconds == 0) {
        clearInterval(interval);
        audio.play();
      }
    }

    , 1000);
}

//Click main circle
var pomodoro = document.querySelector('.pomodoro');

pomodoro.addEventListener('click', function() {
   if (counting) {
    clearInterval(interval);
    counting = false;
  } else if (!counting) {
    setTime();

  }

})


//Break
var breaktimer = document.querySelector('.breaktimer');

breaktimer.addEventListener('click', function() {
  if (counting) {
    clearInterval(interval);
    counting = false;
  }
  timer.innerHTML = '5:00';
})


//Reset
var resettimer = document.querySelector('.resettimer');
resettimer.addEventListener('click', function() {
  if (counting) {
    clearInterval(interval);
    counting = false;
  }
  timer.innerHTML = '25:00';
})
