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

url = new URLSearchParams(window.location.search);

win = Number(url.get("win"));
duce = url.get("duce") === 'true';

function adds1() {
    n1++;
    s1.innerHTML = n1;
    if (n1 == win) {
        setTimeout(win1, 500);
    } else if (n1 == win - 1 && n2 == win - 1 && duce) {
        win++;
    }
}

function adds2() {
    n2++;
    s2.innerHTML = n2;
    if (n2 == win) {
        setTimeout(win2, 500);
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
serve1 = document.querySelector("#serve1");
serve2 = document.querySelector("#serve2");

s1.addEventListener("click", adds1);
s2.addEventListener("click", adds2);
m1.addEventListener("click", mins1);
m2.addEventListener("click", mins2);

function servecheck(){
    if ((n1+n2)%2==0){
        if((n1+n2)%4==0){
            if(serve1.classList.contains("none")){
                serve1.classList.remove("none");
                serve2.classList.add("none");
            }
        }
        else{
            if(serve2.classList.contains("none")){
                serve1.classList.add("none");
                serve2.classList.remove("none");
            }
        }
    }
}

setInterval(servecheck, 100);