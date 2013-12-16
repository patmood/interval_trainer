welcome = document.getElementById("welcome")
clock = document.getElementById("counter")
body = document.getElementsByTagName("body")[0]
description = document.getElementById("description")
controls = document.getElementById("controls")
progressPoints = document.getElementById("progress").children

workInterval = 30
restInterval = 10
exercises = ['Jumping Jacks', 'Wall Sit', 'Push-ups', 'Sit-ups','Step-ups', 'Squats', 'Tricep Dips', 'Plank', 'High Knees', 'Lunges', 'Push-ups and Rotation', 'Side Plank']
beep = new Audio("beep.wav")

counter = document.getElementById("counter")

countDown = (i, nextAction) ->
  if i <= 0 or skip
    skip = false
    beep.play()
    nextAction()
    return
  counter.innerHTML = i
  timeout = window.setTimeout ->
    countDown i-1, nextAction
  , 1000

reset = ->
  welcome.style.display = 'block'
  counter.style.display = 'none'
  description.style.display = 'none'
  controls.style.display = 'none'
  body.style.background = '#3498db'
  for i in [0..progressPoints.length]
    progressPoints[i].className = ' '
  skip = true
  current = 0

startWorkout = ->
  description.style.display = 'block'
  welcome.style.display = 'none'
  counter.style.display = 'block'
  controls.style.display = 'block'
  current = 0
  skip = false
  rest()
