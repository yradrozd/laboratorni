var digit = prompt('Введіть час відліку(тільки в годинах)');
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)));
  return {
    total: t,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}
function inClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");
function updateClock() {
  var t = getTimeRemaining(endtime);
    if (t.total <= 0) {
      document.getElementById("timer").className = "hidden";
      document.getElementById("message").className = "visible";
      clearInterval(timeinterval);
      return true;
    }
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  }
  updateClock();
  var timeinterval = setInterval(updateClock, 100);
}
var deadline = new Date(Date.parse(new Date()) + digit * 60 *60 * 1000); 
inClock("timer", deadline);