// VISUALIZACIÓN INTERACTIVA
// MÉXICO vs ECUADOR - DESAPARICIONES (p5.js)

let mostrarMexico = false;
let mostrarEcuador = false;

let alturaMexico = 0;
let alturaEcuador = 0;

// Valores aproximados
const valorMexico = 128000;
const valorEcuador = 25000;

const maxValor = 130000;

function setup() {
  const canvas = createCanvas(900, 500);
  canvas.parent('sketch-holder');
  smooth();
  textAlign(CENTER, CENTER);
}

function draw() {
  // Fondo violeta (pero lo gestionamos también en body para que se vea bien fuera del canvas)
  background(150, 120, 200);

  // Título
  noStroke();
  fill(255);
  textSize(20);
  text("Personas Desaparecidas", width / 2, 50);
  textSize(14);
  text("Datos acumulados hasta 2025", width / 2, height - 30);

  // Textos clickeables
  textSize(28);

  // MÉXICO (zona aproximada)
  if (mouseX > 150 && mouseX < 350 && mouseY > 100 && mouseY < 140) {
    fill(200, 230, 255);
  } else {
    fill(255);
  }
  text("MÉXICO", 250, 130);

  // ECUADOR (zona aproximada)
  if (mouseX > 550 && mouseX < 750 && mouseY > 100 && mouseY < 140) {
    fill(200, 230, 255);
  } else {
    fill(255);
  }
  text("ECUADOR", 650, 130);

  // Animaciones (mapear valores)
  const objetivoMexico = mostrarMexico ? map(valorMexico, 0, maxValor, 0, 260) : 0;
  const objetivoEcuador = mostrarEcuador ? map(valorEcuador, 0, maxValor, 0, 260) : 0;

  alturaMexico = lerp(alturaMexico, objetivoMexico, 0.08);
  alturaEcuador = lerp(alturaEcuador, objetivoEcuador, 0.08);

  // Color celeste para las barras
  fill(120, 200, 255);

  // Barra México
  rect(230, height - 100 - alturaMexico, 40, alturaMexico, 4);

  // Barra Ecuador
  rect(630, height - 100 - alturaEcuador, 40, alturaEcuador, 4);

  // Texto métricas
  fill(255);
  textSize(14);

  if (mostrarMexico) {
    text("128 000 personas", 250, height - 60);
  }

  if (mostrarEcuador) {
    text("25 000 personas", 650, height - 60);
  }

  // Línea base
  stroke(255, 120);
  strokeWeight(1.5);
  line(100, height - 100, width - 100, height - 100);
  noStroke();
}

function mousePressed() {
  // Click en área de MÉXICO
  if (mouseX > 150 && mouseX < 350 && mouseY > 100 && mouseY < 140) {
    mostrarMexico = !mostrarMexico;
  }

  // Click en área de ECUADOR
  if (mouseX > 550 && mouseX < 750 && mouseY > 100 && mouseY < 140) {
    mostrarEcuador = !mostrarEcuador;
  }
}