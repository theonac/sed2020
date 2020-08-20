function imagePop(MouseEvent) {
    let xpos = 1;
    let ypos = 1;

    if (MouseEvent) {
        xpos = MouseEvent.screenX;
        ypos = MouseEvent.screenY;
    } else {
        xpos = window.event.screenX;
        ypos = window.event.screenY;
    }

    alert("X: " + xpos + ", Y: " + ypos);
}