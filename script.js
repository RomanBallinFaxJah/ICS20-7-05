document.getElementById('button').addEventListener('click', checkDiscount)
let age
let day

function checkDiscount () {
  age = document.getElementById('age').value
  day = document.getElementById('day').value

  if ((day.toLowerCase() !== 'saturday' && day.toLowerCase() !== 'sunday') && (age < 18)) {
    document.getElementById('answer').innerHTML = 'Time to go to school'
  } else if ((day.toLowerCase() !== 'saturday' && day.toLowerCase() !== 'sunday') && (age > 17)) {
    document.getElementById('answer').innerHTML = 'Time to go to work'
  } else {
    document.getElementById('answer').innerHTML = 'Relax for the weekend!'
  }
}
