// Function to request fullscreen
function openFullscreen() {
    const elem = document.documentElement; // Target the whole page
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", openFullscreen);

// script.js
let scoreA = localStorage.getItem("scoreA") ? parseInt(localStorage.getItem("scoreA")) : 0;
let scoreB = localStorage.getItem("scoreB") ? parseInt(localStorage.getItem("scoreB")) : 0;
let teamAName = localStorage.getItem("teamAName") ? localStorage.getItem("teamAName") : "Team A";
let teamBName = localStorage.getItem("teamBName") ? localStorage.getItem("teamBName") : "Team B";
let timerInterval;
let totalSeconds = 0;

document.getElementById("scoreA").textContent = scoreA;
document.getElementById("scoreB").textContent = scoreB;
document.getElementById("teamAName").value = teamAName;
document.getElementById("teamBName").value = teamBName;

function incrementScore(team) {
    if (team === "A") {
        scoreA += 1;
        document.getElementById("scoreA").textContent = scoreA;
    } else if (team === "B") {
        scoreB += 1;
        document.getElementById("scoreB").textContent = scoreB;
    }
}

function decrementScore(team) {
    if (team === "A") {
        scoreA = Math.max(0, scoreA - 1);
        document.getElementById("scoreA").textContent = scoreA;
    } else if (team === "B") {
        scoreB = Math.max(0, scoreB - 1);
        document.getElementById("scoreB").textContent = scoreB;
    }
}

function resetScores() {
    scoreA = 0;
    scoreB = 0;
    document.getElementById("scoreA").textContent = scoreA;
    document.getElementById("scoreB").textContent = scoreB;
    localStorage.removeItem("scoreA");
    localStorage.removeItem("scoreB");
}

function saveScores() {
    localStorage.setItem("scoreA", scoreA);
    localStorage.setItem("scoreB", scoreB);
    localStorage.setItem("teamAName", document.getElementById("teamAName").value);
    localStorage.setItem("teamBName", document.getElementById("teamBName").value);
}

document.getElementById("teamAName").addEventListener("input", () => {
    localStorage.setItem("teamAName", document.getElementById("teamAName").value);
});

document.getElementById("teamBName").addEventListener("input", () => {
    localStorage.setItem("teamBName", document.getElementById("teamBName").value);
});

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        totalSeconds += 1;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        document.getElementById("timer").textContent =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    totalSeconds = 0;
    document.getElementById("timer").textContent = "00:00";
}

function printPage() {
    window.print();
}