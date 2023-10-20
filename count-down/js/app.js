const endDate = 'Tus Dec 07 2023 07:50:31 GMT+0500'
// document.getElementById('end-date').innerText = endDate
const inputs = document.querySelectorAll('input')

function clock() {
  const end = new Date(endDate)
  const now = new Date()
  console.log(now)
  const diff = (end - now) / 1000

  if (diff < 0) return
  console.log(Math.floor(diff / 60) % 60)
  // convert into days;
  inputs[0].value = Math.floor(diff / 3600 / 24)
  inputs[1].value = Math.floor(diff / 3600) % 24
  inputs[2].value = Math.floor(diff / 60) % 60
  inputs[3].value = Math.floor(diff) % 60
}

// initial call
clock()

setInterval(() => {
  clock()
}, 1000)
