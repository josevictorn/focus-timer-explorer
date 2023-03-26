import sound from './sounds.js'

export default function Timer({
  buttonPlay,
  buttonPause,
  minutesDisplay,
  secondsDisplay,
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)


  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')

    minutes = 30
    seconds = 0
  
    updateDisplay(minutes, seconds)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }
  
  function countdown() {
    timerTimeOut = setTimeout(function() {
      if(minutes <= 0 && seconds <= 0) {
        sound().timeEnd()
        reset()
        return
      }
  
      if(seconds <= 0) {
        seconds = 60
        --minutes
      }

      --seconds
      
      updateDisplay(minutes, seconds)
  
      countdown()
    }, 1000)
  }
  
  function increment() {
    minutes += 5
  
    updateDisplay(minutes, seconds)
  }
  
  function decrement() {
    if(minutes <= 5) {
      minutes = 0
    } else {
      minutes -= 5
    }
  
    updateDisplay(minutes, seconds)
  }

  return {
    timerTimeOut,
    reset,
    hold,
    countdown,
    increment,
    decrement
  }
}