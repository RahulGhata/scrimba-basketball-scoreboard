let homeCount = 0;
let guestCount = 0;

let homePts = document.querySelector("#home-pts");
let guestPts = document.querySelector("#guest-pts");

function homeplusone() {
    homeCount = homeCount + 1;
    homePts.textContent = homeCount;
    updateMessage();
}

function homeplustwo() {
    homeCount = homeCount + 2;
    homePts.textContent = homeCount;
    updateMessage();
}

function homeplusthree() {
    homeCount = homeCount + 3;
    homePts.textContent = homeCount;
    updateMessage();
}

function guestplusone() {
    guestCount = guestCount + 1;
    guestPts.textContent = guestCount;
    updateMessage();
}

function guestplustwo() {
    guestCount += 2;
    guestPts.textContent = guestCount;
    updateMessage();
}

function guestplusthree() {
    guestCount += 3;
    guestPts.textContent = guestCount;
    updateMessage();
}

let messageEl = document.querySelector("#message");

function updateMessage() {
    if (homeCount > guestCount) {
        messageEl.textContent = "Home is leading";
    } else if (guestCount > homeCount) {
        messageEl.textContent = "Guest is leading";
    } else if (homeCount === 0 && guestCount === 0) {
        messageEl.textContent = "..."; // Default message
    } else {
        messageEl.textContent = "Scores are tied";
    }
}

function reset() {
    homeCount = 0;
    homePts.textContent = homeCount;
    guestCount = 0;
    guestPts.textContent = guestCount;
    updateMessage();
}