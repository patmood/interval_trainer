var welcome = document.getElementById('welcome')
var clock = document.getElementById('counter')
var body = document.getElementsByTagName('body')[0]
var description = document.getElementById('description')
var controls = document.getElementById('controls')
var workInterval = 5
var restInterval = 3
// var exercises = ['Jumping Jacks', 'Wall Sit', 'Push-ups', 'Sit-ups','Step-ups', 'Squats', 'Tricep Dips', 'Plank', 'High Knees', 'Lunges', 'Push-ups and Rotation', 'Side Plank']
var exercises = ['Jumping Jacks', 'Wall Sit']
var skip
var current
var timeout
var beep = new Audio("beep.wav")


var counter = document.getElementById('counter')

function countDown(i, nextAction){
  if (i <= 0 || skip) {
    skip = false
    beep.play()
    nextAction()
    return
  }
  counter.innerHTML = i
  timeout = setTimeout(function(){
    countDown(i-1,nextAction)
  },1000)
}

function reset(){
  welcome.style.display = 'block'
  counter.style.display = 'none'
  description.style.display = 'none'
  controls.style.display = 'none'
  body.style.background = "#3498db"
  clearTimeout(timeout)
  current = 0
  skip = true
}


function startWorkout(){
  description.style.display = 'block'
  welcome.style.display = 'none'
  counter.style.display = 'block'
  controls.style.display = 'block'
  current = 0
  skip = false
  rest()
}

function nextWorkout(){
  if (!exercises[current]) reset()
  body.style.background = "#e74c3c"
  description.innerHTML = exercises[current]
  countDown(workInterval, rest)
  current++
}

function rest(){
  if (!exercises[current]) reset()
  body.style.background = "#3498db"
  description.innerHTML = "Up Next:<br>"+exercises[current]
  countDown(restInterval, nextWorkout)
}

start.addEventListener('click',startWorkout)
document.getElementById('skip').addEventListener('click', function(){ skip = true })
document.getElementById('reset').addEventListener('click', reset)
