

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(235, 230, 215);

  // FIGURA 1: rectángulo 
  fill(200, 40, 40);
  noStroke();
  rect(width * 0.10, height * 0.15, width * 0.30, height * 0.20);

  // FIGURA 2: círculo
  
  fill(240, 190, 40);
  circle(width * 0.50, height * 0.50, height * 0.28);

  // FIGURA 3: triángulo 

  fill(20);
  triangle(
    width * 0.20, height * 0.80,
    width * 0.45, height * 0.40,
    width * 0.60, height * 0.80
  );

  // FIGURA 4: rectángulo azul
  
  fill(40, 80, 170);
  rect(width * 0.60, height * 0.15, width * 0.25, height * 0.30);

  // FIGURA 5: triángulo
 
  fill(245);
  stroke(20);
  strokeWeight(2);
  triangle(
    width * 0.70, height * 0.75,
    width * 0.90, height * 0.45,
    width * 0.95, height * 0.80
  );

  // FIGURA 6: líneas diagonales

  stroke(20);
  strokeWeight(4);
  line(0, height * 0.85, width, height * 0.20);
  line(width * 0.15, height, width * 0.85, 0);
  line(0, height * 0.30, width, height * 0.65);

  // FIGURA 7: círculo blanco pequeño

  fill(245);
  stroke(20);
  strokeWeight(3);
  circle(width * 0.30, height * 0.35, height * 0.12);

  // FIGURA 8: rectángulo negro vertical
 
  noStroke();
  fill(25);
  rect(width * 0.43, height * 0.10, width * 0.04, height * 0.75);


  // FIGURA 9: cuadrado amarillo
  fill(240, 190, 40);
  rect(width * 0.76, height * 0.62, width * 0.10, width * 0.10);

}
