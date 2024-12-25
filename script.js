let n1 = 0;
let n2 = 0;

function adds1() {
    n1++;
    s1.innerHTML=n1;
}

function adds2() {
    n2++;
    s2.innerHTML=n2;
}

function mins1() {
    if(n1>0){
        n1--;
        s1.innerHTML=n1;
    }
}

function mins2() {
    if(n2>0){
        n2--;
        s2.innerHTML=n2;
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