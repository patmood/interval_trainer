var welcome = document.getElementById('welcome')
var clock = document.getElementById('counter')
var body = document.getElementsByTagName('body')[0]
var description = document.getElementById('description')
var controls = document.getElementById('controls')
var progressPoints = document.getElementById('progress').children

var DURATION_WORK = 30
var DURATION_REST = 10
var DURATION_BREAK = 120

var noSleep = new NoSleep()

// var exercises = ['Jumping Jacks', 'Wall Sit', 'Push-ups', 'Sit-ups','Step-ups', 'Squats', 'Tricep Dips', 'Plank', 'High Knees', 'Lunges', 'Push-ups and Rotation', 'Side Plank']
var exercises = [
  'Burpees',
  'Wall Sit',
  'Push-ups',
  'Sit-ups',
  'Box Jumps',
  'Squats',
  'Tricep Dips',
  'Plank',
  'High Knees',
  'Lunges',
  'Close Grip Pushups',
  'Stomach Hollow',
]

var skip
var current
var timeout
var beep = new Audio('./beep.wav')

var counter = document.getElementById('counter')

function countDown(i, nextAction) {
  if (i <= 0 || skip) {
    skip = false
    beep.currentTime = 0
    beep.play()
    nextAction()
    return
  }
  counter.innerHTML = i
  timeout = window.setTimeout(function() {
    countDown(i - 1, nextAction)
  }, 1000)
}

function reset() {
  noSleep.disable()
  welcome.style.display = 'block'
  counter.style.display = 'none'
  description.style.display = 'none'
  controls.style.display = 'none'
  body.style.background = '#3498db'
  for (var i = 0; i < progressPoints.length; i++) {
    progressPoints[i].className = ' '
  }
  skip = true
  current = 0
}

function startWorkout() {
  beep.play() // Need to trigger play from user direct interaction
  noSleep.enable()
  description.style.display = 'block'
  welcome.style.display = 'none'
  counter.style.display = 'block'
  controls.style.display = 'block'
  current = 0
  skip = false
  rest()
}

function nextWorkout() {
  if (!exercises[current]) {
    reset()
    return
  }
  body.style.background = '#e74c3c'
  description.innerHTML = exercises[current]
  countDown(DURATION_WORK, rest)
  progressPoints[current].className = 'done'
  current++
}

function rest() {
  if (!exercises[current]) {
    reset()
    return
  }
  body.style.background = '#3498db'
  description.innerHTML = 'Up Next:<br>' + exercises[current]
  countDown(DURATION_REST, nextWorkout)
}

start.addEventListener('click', startWorkout)
document.getElementById('skip').addEventListener('click', function() {
  skip = true
})
document.getElementById('reset').addEventListener('click', function() {
  current = null
  skip = true
})
