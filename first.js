let win = 11;

targ = document.getElementById("target");
start = document.querySelector("#start");
tsin = document.querySelector("#target");
isduce = document.querySelector("#duceSwitch");

start.addEventListener("click", function () {
    const duce = isduce.checked;
    const queryString = `win=${win}&duce=${duce}`;
    window.location.href = "scores.html?" + queryString;
});