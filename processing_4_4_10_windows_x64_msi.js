function setup() {

    createCanvas(1000, 1000);
  background(128, 0, 64);
  angleMode(DEGREES);
  
 // Body (wider lower torso, top aligned with head)
strokeWeight(4);
stroke(51);
fill('#71b7c3');
beginShape();
// shoulders (same width, aligned with head)
vertex(420, 600); // left shoulder
vertex(620, 600); // right shoulder

// waist (wider at bottom)
vertex(680, 1000); // right waist
vertex(360, 1000); // left waist
endShape(CLOSE);

// Shirt Line (adjusted to new torso)
line(520, 650, 505, 1000);

// Arms
strokeWeight(4);
stroke(51);
fill('#71b7c3');

// Left upper arm 
push();
translate(310 + 15, 890); 
rotate(20); 
rectMode(CENTER); 
rect(0, 0, 90, 370); 
pop();

// Right upper arm 
push();
translate(640 + 80, 900); 
rotate(-20); 
rectMode(CENTER); 
rect(0, 0, 90, 400); 
pop();
  
  //Face
  strokeWeight(4);
  stroke(51);
  fill('#f2d2bd');
  ellipse(519, 430, 393, 542);
  
  //mouth
  push();
translate(520, 597);   
rotate(360);          
stroke(0);            
strokeWeight(3);
fill(255);            

arc(0, 0, 80, 80, 0, 180, CHORD);

pop();
  
  //Left Eye
  arc(432, 397, 73, 40, 180, 0, OPEN);
  
  //Right Eye
  arc(577, 397, 73, 40, 180, 0, OPEN);
  
  // Hair 1 
push();
translate(0, 50); 
stroke(51);
strokeWeight(3);
fill(0); // black
beginShape();
vertex(590, 100);  
vertex(500, 250);
vertex(450, 160);
vertex(400, 350);
vertex(400, 400);
vertex(300, 500);
vertex(250, 400);
vertex(250, 250);
vertex(350, 120);
endShape(CLOSE);
pop();

// Hair 2 
push();
translate(0, 50); 
stroke(51);
strokeWeight(3);
fill(0); 
beginShape();
curveVertex(540, 110);
curveVertex(540, 110);
curveVertex(600, 130);
curveVertex(700, 250);
curveVertex(750, 400);
curveVertex(650, 450);
curveVertex(625, 400);
curveVertex(510, 230);
curveVertex(510, 230);
endShape();
pop();

//nose 
push();
translate(-10, 25); 
stroke(51);
strokeWeight(3);
fill('#f2d2bd');
beginShape();
vertex(510, 440); // top-left
vertex(520, 455); // top-mid
vertex(535, 450); // top-right
vertex(530, 470); // bottom-right
vertex(515, 475); // bottom-left
endShape(CLOSE);
pop();

// Oversized Tilted-Left Sunglasses with Smooth Curved Arms
push();
translate(500, 200);    // move glasses slightly down
rotate(10);             // tilt left

// Lenses and frame
stroke(255);           // white frame
strokeWeight(12);      // thick frame
fill(0);               // black lenses

// Left lens
ellipse(-80, 0, 120, 120);

// Right lens
ellipse(80, 0, 120, 120);

// Bridge (above lenses)
strokeWeight(8);
line(-30, -40, 30, -40);

// Arms (smooth curves)
strokeWeight(6);

// left arm - smooth curve using bezier
bezier(-140, 10, -150, 30, -180, 40, -190, 60);

// right arm - smooth curve using bezier
bezier(140, 10, 150, 30, 180, 40, 190, 60);

pop();

}


function draw() {

}
