export default function() {
  const buttonPressAudio = new Audio('https://github.com/JoseVictorNascimento/challenge_timer_focus/blob/main/audios_button-press.wav?raw=true')
  const kichenTimer = new Audio('https://github.com/JoseVictorNascimento/challenge_timer_focus/blob/main/audios_kichen-timer.mp3?raw=true')
  const florestAudio = new Audio('https://github.com/JoseVictorNascimento/challenge_timer_focus/blob/main/Floresta.wav?raw=true')
  const rainAudio = new Audio('https://github.com/JoseVictorNascimento/challenge_timer_focus/blob/main/Chuva.wav?raw=true')
  const fireplaceAudio = new Audio('https://github.com/JoseVictorNascimento/challenge_timer_focus/blob/main/Lareira.wav?raw=true')
  const coffeeShopAudio = new Audio('https://github.com/JoseVictorNascimento/challenge_timer_focus/blob/main/Cafeteria.wav?raw=true')
  
  florestAudio.loop = true
  rainAudio.loop = true
  fireplaceAudio.loop = true
  coffeeShopAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kichenTimer.play()
  }

  return {
    pressButton,
    timeEnd,
    florestAudio,
    rainAudio,
    fireplaceAudio,
    coffeeShopAudio
  }
}