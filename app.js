function setup(){
    createCanvas(720, 400);
    background(100,55,40);
    fill(100,70,50);
    noStroke();
    rect(20, 20, 680, 100);
    rect(20, 140, 680, 100);
    rect(20, 260, 680, 120);
   // drawFace(100, 200, 30);  // left face with bigger eyes 
   // drawFace(300, 200, 10);  // right face
}
//function drawFace(x, y, eyeSize) {
 //   push();
 //   fill(110, 180, 100);
 //   translate(x,y);
 //   ellipse(0, 10, 100, 100); //head
 //   drawEye(-15, -10, eyeSize);
 //   drawEye(15, -10, eyeSize);
 //   fill(37,120,97);
 //   rect(-30, 30, 60,5); //mouth
 //   pop();
  //}
  
 // function drawEye(x,y, eyeSize) {
 //   push();
 //   translate(x,y);
 //   fill(255); //white
 //   ellipse(0, 6, eyeSize+10, eyeSize+10);
 //   fill(10,100,10); //black
 //   ellipse(-3, 0, eyeSize/4.0, eyeSize/4.0);
    
  //  pop();
  //}
  function drawBody (c) {
    fill(c);
    noStroke();
    strokeWeight(1);    
    arc(50, 50, 80, 100, 0, PI);
  }
  function drawMug(c, drawHandle) {
    push();
    noFill();
    strokeWeight(10);
    stroke(100);
    curve(1, 60, 90, 55, 83, 84, 1, 100);
    pop();
  }
function draw(){
  //background(200);
    drawMug();
    drawBody(100);
 strokeWeight(1);
//fill(100,10,40);
//strokeWeight(1);    
//arc(50, 50, 80, 100, 0, PI);

//noFill();
//strokeWeight(10);
//stroke(100,10,40);
//curve(1, 60, 90, 55, 83, 84, 1, 100);

//strokeWeight(.5);
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
