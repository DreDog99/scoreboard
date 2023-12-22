let homeEl = document.getElementById("homescore-el")

let guestEl = document.getElementById("guestscore-el")

let homeInitial = 0

let guestInitial = 0

function addOneH() {
    homeInitial = homeInitial + 1
    homeEl.textContent = homeInitial
}

function addTwoH() {
    homeInitial = homeInitial + 2
    homeEl.textContent = homeInitial
}

function addThreeH() {
    homeInitial = homeInitial + 3
    homeEl.textContent = homeInitial
}

function addOneG() {
    guestInitial = guestInitial + 1
    guestEl.textContent = guestInitial
}

function addTwoG() {
    guestInitial = guestInitial + 2
    guestEl.textContent = guestInitial
}

function addThreeG() {
    guestInitial = guestInitial + 3
    guestEl.textContent = guestInitial
}
