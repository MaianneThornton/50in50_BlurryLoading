const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

// Runs the blurring function every 30 ms 
let int = setInterval(blurring, 30)

function blurring() {
  load++

  // Stops running when int = 100
  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  // Opacity is a scale from 0 (not opaque) to 1 (opaque)
  // Fades out the loading percentage text
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  // Fades out the bg image blur from 30px to 0px
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}