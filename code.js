export const configurazione = {
  testo: "SPYPE",

  dimensione: 0.8,
  interlinea: 0.7,
  allineamento: "centro",
  percorsoFont: "./assets/InputMonoCondensed-BoldItalic.ttf",

  sensibilitàMicrofonoBase: 10,
  densitàPuntiBase: 1,

  nascondiInterfaccia: true,
};

/**
 * Disegna punto
 * Metti qui quello che vuoi disegnare per ogni punto della font!
 *
 * @typedef {Object} Ingredienti
 * @property {number} x - La coordinata x del punto
 * @property {number} y - La coordinata y del punto
 * @property {number} angolo - L'angolo della curva della font in quel punto
 * @property {number} indice - Il numero del punto nella sequenza (0, 1, 2, 3, ...)
 * @property {number} unita - Unita' di misura: corrisponde al 10% della dimensione più piccola della finestra (larghezza o altezza)
 * @property {number} volume - Il volume del microfono - Varia da 0 a 1
 * @property {number} frameCount - Il numero di frame passati dall'avvio del programma
 * @property {number} [alpha] - Device orientation alpha angle (z-axis rotation) - Varia da 0 a 360
 * @property {number} [beta] - Device orientation beta angle (front-to-back tilt) - Varia da -90 a 90
 * @property {number} [gamma] - Device orientation gamma angle (left-to-right tilt) - Varia da -90 a 90
 *
 * @param {Ingredienti} ingredienti
 */
export function disegnaPunto({
  x,
  y,
  angolo,
  indice,
  unita,
  volume,
  frameCount,
  alpha = 0,
  beta = 0,
  gamma = 0,
}) {
  let i = indice + frameCount;

  // Cambia colore ciclicamente
  if (i % 4 == 0) {
    noFill();
  } else if (i % 4 == 1) {
    fill("white");
  } else if (i % 4 == 2) {
    fill("blue");
  } else if (i % 4 == 3) {
    fill("pink");
  }

  // Imposta stroke
  stroke(255);
  strokeWeight(1 + volume * 10); // Lo spessore cambia con il volume

  // Linea animata che reagisce al volume
  push();
  translate(x, y);
  rotate(angolo + frameCount * 0.5);
  line(
    0,
    0,
    cos(frameCount * 0.1 + indice) * volume * 50,
    sin(frameCount * 0.1 + indice) * volume * 50
  );
  pop();

  // Cerchio centrale che pulsa col suono
  noStroke();
  ellipse(x, y, 10 + volume * 50);

  // Rettangolo ruotato che si ingrandisce col suono
  push();
  translate(volume * 500, 0);
  rotate(frameCount + indice);
  rectMode(CENTER);
  rect(0, 0, 10 + volume * 30, 10 + volume * 30);
  pop();
}

/**
 * Carica le risorse necessarie
 * Esempio: carica immagini, suoni, ecc.
 */
export function caricamentoRisorse() {}

/**
 * Imposta le impostazioni iniziali
 * Esempio: impostazioni di frame rate, misura degli angoli, ecc.
 */
export function impostazioni() {
  frameRate(30);
  angleMode(DEGREES);
}

/**
 * Disegna sotto i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sotto(disegnaTesto) {
  background("black");

  // [INFO] Rimuovi il commento per disegnare il testo
  // fill("white");
  // disegnaTesto();
}

/**
 * Disegna sopra i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sopra(disegnaTesto) {
  // [INFO] Rimuovi il commento per disegnare il testo
  // fill("black");
  // disegnaTesto();
}
