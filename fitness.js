var start = document.getElementById('start')
var clock = document.getElementById('counter')
var description = document.getElementById('description')
var interval = 3
var exercises = ['Jumping Jacks', 'Wall Sit', 'Push-ups', 'Sit-ups','Step-ups', 'Squats', 'Tricep Dips', 'Plank', 'High Knees', 'Lunges', 'Push-ups and Rotation', 'Side Plank']
var current = 0

var counter = document.getElementById('counter')

function countDown(i){
  if (i < 0) {
    nextWorkout()
    return
  }
  setTimeout(function(){
    counter.innerHTML = i
    countDown(i-1)
  },1000)
}

// function countDown(i){
//   setInterval(function(){
//     counter.innerHTML = i
//     i--
//     if (i < 0) {
//       clearInterval(countDown)
//       nextWorkout()
//     }
//   },1000)
// }

function reset(){
  start.style.display = 'block'
  counter.style.display = 'none'
}


function startWorkout(){
  start.style.display = 'none'
  counter.style.display = 'block'
  description.innerHTML = exercises[current]
  countDown(interval)
}

function nextWorkout(){
  current++
  if (exercises[current]) {
    description.innerHTML = exercises[current]
    countDown(interval)
  } else {
    reset()
  }
}

start.addEventListener('click',startWorkout)
