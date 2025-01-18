let win;

targ = document.getElementById("target");
start = document.querySelector("#start");

start.addEventListener("click", function() {
    win = targ.value;
    window.location.href = "scores.html?win=" + encodeURIComponent(win);
});