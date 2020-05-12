
function setAlarm() {
  var showTime = document.getElementById("timeRemaining");
  var setTime = document.getElementById("alarmSet").value;
  var calMinutes = setTime / 60;
  var minutes = Math.floor(calMinutes);
  var calSeconds = (calMinutes - minutes) * 60;
  var seconds = Math.round(calSeconds);


  function al() {
    if (seconds > 0) {
      seconds = seconds - 1;
    } else if (seconds == 0 && minutes > 0) {
      minutes = minutes - 1;
      seconds = seconds + 59;
    } else if (minutes == 0 && seconds == 0) {
      playAlarm();
      window.clearInterval(stop);
    }
    showTime.innerHTML = "Time Remaining: " + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

  }


  var stop = setInterval(al, 1000);
}




console.log("4");
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;












//-------------------------------rough--------------------------------------
// function setAlarm() {
//   var showTime = document.getElementById("timeRemaining");
//   var setTime = document.getElementById("alarmSet").value;
//   var calHours = setTime / 60;
//   var hours = Math.floor(calHours);
//   var calMinutes = (calHours - hours) * 60;
//   var minutes = Math.round(calMinutes);


//   showTime.innerHTML = "Time Remaining: " + hours + ":" + minutes;



// }