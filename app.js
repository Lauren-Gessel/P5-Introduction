function setup(){
    createCanvas(720, 400);
}
function draw(){
    background(150);



    noStroke();
    fill(50,100,50);
    rect(0, 300, 750, 100);

    fill(20,200,20)
    ellipse(106, 146, 80, 55);

    quad(120, 170, 136, 136, 300, 190, 270, 235);
   
    ellipse(350,220, 250, 120) 

    quad(235, 240, 275, 265, 255, 345, 230, 345);

    quad(425, 200, 470, 230, 455, 345, 430, 345);

    triangle(470, 230, 520, 200, 465, 200);

    fill(200,100, 50);
    triangle(593, 85, 645, 62, 612, 106);

    fill(100, 0, 100);
    circle(600, 100, 30, 30);
// animate above two, to grow and or move with time
    fill(0);
    circle(100, 150, 10, 10);
    fill(100);
    helperCoordinates();
}

    function helperCoordinates() {
        text(
            '(' +
            floor(mouseX) +
            ',' +
            floor(mouseY) +
            ')' ,
            mouseX,
            mouseY
        );
    }
