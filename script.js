let n1 = 0;
let n2 = 0;

let serveDuce = false;
let duceStart = null;

function win1() {
    s1.children[0].innerHTML = "Win";
}

function win2() {
    s2.children[0].innerHTML = "Win";
}

function notouch() {
    s1.removeEventListener("click", adds1);
    s2.removeEventListener("click", adds2);
    m1.removeEventListener("click", mins1);
    m2.removeEventListener("click", mins2);
    serve1.classList.add("none");
    serve2.classList.add("none");
}

url = new URLSearchParams(window.location.search);

win = Number(url.get("win"));
duce = url.get("duce") === 'true';

function adds1() {
    n1++;
    s1.children[0].innerHTML = n1;
    if (n1 == win) {
        notouch();
        setTimeout(win1, 500);
    } else if (n1 == win - 1 && n2 == win - 1 && duce) {
        win++;
        serveDuce = true;
        duceStart = "s1";
    }
}

function adds2() {
    n2++;
    s2.children[0].innerHTML = n2;
    if (n2 == win) {
        notouch();
        setTimeout(win2, 500);
    } else if (n1 == win - 1 && n2 == win - 1 && duce) {
        win++;
        serveDuce = true;
        duceStart = "s2";
    }
}

function mins1() {
    if (n1 > 0) {
        n1--;
        s1.children[0].innerHTML = n1;
    }
}

function mins2() {
    if (n2 > 0) {
        n2--;
        s2.children[0].innerHTML = n2;
    }
}

s1 = document.querySelector("#score1");
s2 = document.querySelector("#score2");
m1 = document.querySelector("#minus1");
m2 = document.querySelector("#minus2");
serve1 = document.querySelector("#serve1");
serve2 = document.querySelector("#serve2");

s1.addEventListener("click", adds1);
s2.addEventListener("click", adds2);
m1.addEventListener("click", mins1);
m2.addEventListener("click", mins2);

function servecheck() {
    if (!serveDuce) {
        if ((n1 + n2) % 2 == 0) {
            if ((n1 + n2) % 4 == 0) {
                if (serve1.classList.contains("none")) {
                    serve1.classList.remove("none");
                    serve2.classList.add("none");
                }
            }
            else {
                if (serve2.classList.contains("none")) {
                    serve1.classList.add("none");
                    serve2.classList.remove("none");
                }
            }
        }
    }
    else {
        if (duceStart == "s1") {
            if ((n1 + n2) % 2 == 0) {
                if (serve1.classList.contains("none")) {
                    serve1.classList.remove("none");
                    serve2.classList.add("none");
                }
            }
            else {
                if (serve2.classList.contains("none")) {
                    serve1.classList.add("none");
                    serve2.classList.remove("none");
                }
            }
        }
        else {
            if ((n1 + n2) % 2 == 0) {
                if (serve2.classList.contains("none")) {
                    serve1.classList.add("none");
                    serve2.classList.remove("none");
                }
            }
            else {
                if (serve1.classList.contains("none")) {
                    serve1.classList.remove("none");
                    serve2.classList.add("none");
                }
            }
        }
    }
}

setInterval(servecheck, 100);