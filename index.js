let homePointEl = document.getElementById('home-point-el')
let guestPointEl = document.getElementById('guest-point-el')
let leadingTeam = document.getElementById('lead-team-el')
let homePoints = 0
let guestPoints = 0

function newGame() {
    homePointEl.textContent = 0
    guestPointEl.textContent = 0
    homePoints = 0
    guestPoints = 0
}

function addHomePoints(points) {
    homePoints += points
    homePointEl.textContent = homePoints
    updateLeadingTeam()
}

function addGuestPoints(points) {
    guestPoints += points
    guestPointEl.textContent = guestPoints
    updateLeadingTeam()
}

function updateLeadingTeam() {
  if (homePoints > guestPoints) {
    leadingTeam.textContent = "HOME";
  } else if (guestPoints > homePoints) {
    leadingTeam.textContent = "GUEST";
  } else {
    leadingTeam.textContent = "DRAW";
  }
}

updateLeadingTeam()