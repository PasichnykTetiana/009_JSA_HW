btns = document.querySelectorAll('.btn');

function myCustomEvent(event, elems, f){
    for(let i = 0; i < elems.length; i++){
        elems[i].addEventListener(event, f);
    }
}
let m = function () {
    this.style.height="150px"
};
let n = function () {
    this.style.height = "100px"
};

myCustomEvent('mouseover', btns, m);
myCustomEvent('mouseout', btns, n);

console.dir(btns[0].src);
console.log(document.querySelectorAll('.btn'));