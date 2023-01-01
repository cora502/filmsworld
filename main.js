alert("You can hide from your stress on this page");
var gettext = document.getElementById('head');
var par = "Welcome To Films World";
let a = 0;
let b = par.length;
function start(){
    gettext.innerHTML += par[a];
    a++;
    stop(a,b);
};
function stop(){
    if(a == b){
        clearInterval(stopp);
    }
};
let stopp = setInterval(start,150);
