let age = 0
let day = 0

document.getElementById('button').addEventListener('click', movie)
function movie () {
  age = document.getElementById('input').value
  day = document.getElementById('day').value

  if ((day === 'tuesday' || day === 'thursday') || (age >= 12 && age <= 21)) {
    document.getElementById('answer').innerHTML = 'you can get it for free'
  } else {
    document.getElementById('answer').innerHTML = 'you need to pay'
  }
}
