const timer = document.getElementById('stopwatch');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Set variables for time minutes, seconds, milliseconds
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

// Functions

// Start the stopwatch 
function start() {
  interval = setInterval(runTimer, 10);
}

// Stop the stopwatch
function stop() {
  clearInterval(interval);
}

// Reset the stopwatch
function reset() {
  stop();
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  timer.innerText = '00:00:000';
}

// Show the timer values
function runTimer() {
  milliseconds++;
  
  if(milliseconds === 100) {
    seconds++;
    milliseconds = 0;
  }
  
  if(seconds === 60) {
    minutes++;
    seconds = 0;
  }
  
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;
  let ms = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;

  timer.innerText = `${m}:${s}:${ms}`;
}

// Event listeners
startBtn.addEventListener('click', start); 
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);