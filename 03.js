function draw() {

    // получение элемента и его графического контекста.
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let arr = [100, 50, 100, 150, 50, 5, 100];
    console.log(arr);
    context.moveTo(0, 300-arr[0]);
    for (i=1; i<arr.length; i++){
        context.lineTo(i*10, 300-arr[i]);
    }

    // создание пути.
    // // context.beginPath();
    // context.moveTo(0, 300);
    // context.lineTo(50, 250);
    // context.lineTo(70, 100);
    // context.lineTo(90, 300);
    // черчение линии на холсте.
    context.stroke();
}
if (window.addEventListener)
    window.addEventListener("load", draw, true);