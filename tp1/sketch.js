let img;

function preload() {
  img=loadImage ("mona_lisa.jpeg.jpg"); //
}
function setup( ) { 
  createCanvas(800, 400); //tamaño pedido
  noStroke( );
}
function draw ( ) { 
  background(150, 180, 200); 
  
  // Imagen izquierda
  image(img, 0, 0, 400, 400);
  
  // Dibujo derecha
  push( );
  translate(400, 0);

// Montañas (fondo)
fill(100, 130, 110);
triangle(0, 200, 200, 120, 300, 200);
triangle(100, 200, 250, 120, 400, 200);

// Cuerpo
fill(50);
ellipse(200, 300, 180, 140);

// Brazos
fill(210, 180, 150);
rect(150, 290, 100, 25, 10);

// Cara
ellipse(200, 170, 90, 110);

// Pelo
fill(60, 40, 20);
arc(200, 160, 110, 120, PI, TWO_PI);

// Ojos
fill(0);
ellipse(185, 170, 5, 5);
ellipse(215, 170, 5, 5);

// Sonrisa
noFill( );
stroke(0);
strokeWeight(2);
arc(200, 190, 30, 10, 0, PI)
}
// Guardar imagen
function keyPressed( ) {
  if (key === 's' || key === 's') {
    saveCanvas("mi_monalisa", "png");
  }
}