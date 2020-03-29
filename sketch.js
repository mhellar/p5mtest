function setup() {
    createCanvas(displayWidth, displayHeight);
    strokeWeight(10);
    stroke(0);
}

function draw() {
    textSize(32);
    fill(0, 102, 153);
    text('Touch To Draw', 10, 30);
}

function touchMoved() {
    line(mouseX, mouseY, pmouseX, pmouseY);
    return false;
}
