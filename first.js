let win;

targ = document.getElementById("target");
start = document.querySelector("#start");
ists = document.querySelector("#toggleSwitch");
tsin = document.querySelector("#target");
isduce = document.querySelector("#duceSwitch");

function checkts() {
    if (ists.checked == false) {
        if (!tsin.classList.contains("none")) {
            tsin.classList.add("none");
        }
    } else {
        if (tsin.classList.contains("none")) {
            tsin.classList.remove("none");
        }
    }
    window.setTimeout(checkts, 100);
}

start.addEventListener("click", function () {
    if (ists.checked == true) {
        win = targ.value;
    } else {
        win = null;
    }
    const duce = isduce.checked;
    const queryString = `win=${win}&duce=${duce}`;
    window.location.href = "scores.html?" + queryString;
});

checkts();