const container = document.querySelector(".container");

document.addEventListener("mousemove", (e) => {
    rotateElement(e, container);
});

function rotateElement(event, element) {
    //get mouse position
    const x = event.clientX;
    const y = event.clientY;
    //console.log(x, y);

    //find the middle
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    //get offset from middle
    const offsetX = ((x - middleX) / middleX) * 35;
    const offsetY =  -1 * ((y - middleY) / middleY) * 35;
    //console.log(offsetX, offsetY);

    element.style.setProperty("--rotateX", offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
    element.style.setProperty("--translateX", offsetX * 10 + "px");
    element.style.setProperty("--translateY", offsetY * -10 + "px");
    element.style.setProperty("--scaleX", Math.abs(offsetX / 80) +1);
    element.style.setProperty("--scaleY", Math.abs(offsetY / -80) + 1);

}
