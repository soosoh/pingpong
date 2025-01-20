let n1 = 0;
let n2 = 0;

function win1() {
    s1.innerHTML = "Win";
    s1.removeEventListener("click", adds1);
    s2.removeEventListener("click", adds2);
}

function win2() {
    s2.innerHTML = "Win";
    s1.removeEventListener("click", adds1);
    s2.removeEventListener("click", adds2);
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

win = parseInt(getQueryParam("win"));
duce = getQueryParam("duce") === 'true';

function adds1() {
    n1++;
    s1.innerHTML = n1;
    if (n1 == win) {
        setTimeout(win1, 1000);
    } else if (n1 == win - 1 && n2 == win - 1 && duce) {
        win++;
    }
    console.log(win);
}

function adds2() {
    n2++;
    s2.innerHTML = n2;
    if (n2 == win) {
        setTimeout(win2, 1000);
    } else if (n1 == win - 1 && n2 == win - 1 && duce) {
        win++;
    }
}

function mins1() {
    if (n1 > 0) {
        n1--;
        s1.innerHTML = n1;
    }
}

function mins2() {
    if (n2 > 0) {
        n2--;
        s2.innerHTML = n2;
    }
}

s1 = document.querySelector("#score1");
s2 = document.querySelector("#score2");
m1 = document.querySelector("#minus1");
m2 = document.querySelector("#minus2");

s1.addEventListener("click", adds1);
s2.addEventListener("click", adds2);
m1.addEventListener("click", mins1);
m2.addEventListener("click", mins2);