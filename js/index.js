import Timer from './timer.js';
import Sound from './sounds.js'

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncrement = document.querySelector('.increment')
const buttonDecrement = document.querySelector('.decrement')

const buttonTheme = document.querySelector('.theme')

const root = document.querySelector(':root')

const buttonFlorestSound = document.querySelector('.florest')
const buttonRainSound = document.querySelector('.rain')
const buttonFireplaceSound = document.querySelector('.fireplace')
const buttonCoffeeShopSound = document.querySelector('.coffee-shop')

const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')

const volumeFlorest = document.querySelector('#volume-florest')
const volumeRain = document.querySelector('#volume-rain')
const volumeCoffeeShop = document.querySelector('#volume-coffee-shop')
const volumeFireplace = document.querySelector('#volume-fireplace')

const timer = Timer({
  buttonPlay,
  buttonPause,
  minutesDisplay,
  secondsDisplay,
})

const sound = Sound()

buttonPlay.addEventListener('click', () => {
  buttonPause.classList.remove('hide')
  buttonPlay.classList.add('hide')

  timer.countdown()

  sound.pressButton()
})

buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')

  timer.hold()

  sound.pressButton()
})

buttonStop.addEventListener('click', () => {
  timer.reset()

  timer.hold()

  sound.pressButton()
})

buttonIncrement.addEventListener('click', () => {
  timer.increment()

  sound.pressButton()
})

buttonDecrement.addEventListener('click', () => {
  timer.decrement()

  sound.pressButton()
})

buttonTheme.addEventListener('click', () => {
  root.classList.toggle('dark')
})

buttonFlorestSound.addEventListener('click', () => {
  let isPlayingSong = buttonFlorestSound.classList.toggle('playing')

  if(isPlayingSong) {
    sound.florestAudio.play()
    sound.florestAudio.volume = volumeFlorest.value
  } else {
    sound.florestAudio.pause()
  }
})

buttonRainSound.addEventListener('click', () => {
  let isPlayingSong = buttonRainSound.classList.toggle('playing')

  if(isPlayingSong) {
    sound.rainAudio.play()
    sound.rainAudio.volume = volumeRain.value
  } else {
    sound.rainAudio.pause()
  }
})

buttonCoffeeShopSound.addEventListener('click', () => {
  let isPlayingSong = buttonCoffeeShopSound.classList.toggle('playing')

  if(isPlayingSong) {
    sound.coffeeShopAudio.play()
    sound.coffeeShopAudio.volume = volumeCoffeeShop.value
  } else {
    sound.coffeeShopAudio.pause()
  }
})

buttonFireplaceSound.addEventListener('click', () => {
  let isPlayingSong = buttonFireplaceSound.classList.toggle('playing')

  if(isPlayingSong) {
    sound.fireplaceAudio.play()
    sound.fireplaceAudio.volume = volumeFireplace.value
  } else {
    sound.fireplaceAudio.pause()
  }
})

