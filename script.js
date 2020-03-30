const randomPpvBtn = document.getElementById('random-ppv');
const randomMatchBtn = document.getElementById('random-match');
const result = document.getElementById('result');



function getRandomPPV() {
  fetch('./wwenetwork.json')
  .then((res) => res.json())
  .then((data) => {
    let randNum = Math.floor(Math.random() * data.length)
    let randomPPVName = data[randNum].ppv_name
    result.innerHTML = randomPPVName
  }
)
}

function getRandomPPVMatch() {
  fetch('./wwenetwork.json')
  .then((res) => res.json())
  .then((data) => {
    let randNum = Math.floor(Math.random() * data.length)
    let randomPPV = data[randNum]
    let randomMatch = randomPPV.matches[Math.floor(Math.random() * randomPPV.matches.length)]
    result.innerHTML = `
      <h3>${randomMatch}</h3>
      <p>${randomPPV.ppv_name}</p>
      <small>${randomPPV.date}</small>
      <br>
      <small>${randomPPV.location}</small>
    `
  }
)
}

randomPpvBtn.addEventListener('click', getRandomPPV)
randomMatchBtn.addEventListener('click', getRandomPPVMatch)