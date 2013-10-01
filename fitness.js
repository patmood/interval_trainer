var welcome = document.getElementById('welcome')
var clock = document.getElementById('counter')
var body = document.getElementsByTagName('body')[0]
var description = document.getElementById('description')
var workInterval = 5
var restInterval = 3
var exercises = ['Jumping Jacks', 'Wall Sit', 'Push-ups', 'Sit-ups','Step-ups', 'Squats', 'Tricep Dips', 'Plank', 'High Knees', 'Lunges', 'Push-ups and Rotation', 'Side Plank']
var skip = false
var current

var counter = document.getElementById('counter')

function countDown(i, nextAction){
  if (i < 0 || skip) {
    skip = false
    nextAction()
    return
  }
  counter.innerHTML = i
  setTimeout(function(){
    countDown(i-1,nextAction)
  },1000)
}

function reset(){
  welcome.style.display = 'block'
  counter.style.display = 'none'
  description.style.display = 'none'
}


function startWorkout(){
  welcome.style.display = 'none'
  counter.style.display = 'block'
  current = -1
  rest()
}

function nextWorkout(){
  if (exercises[current]) {
    body.style.background = "#e74c3c"
    description.innerHTML = exercises[current]
    countDown(workInterval, rest)
  } else {
    reset()
  }
}

function rest(){
  current++
  body.style.background = "#3498db"
  description.innerHTML = "Up Next:<br>"+exercises[current]
  countDown(restInterval, nextWorkout)
}

start.addEventListener('click',startWorkout)
