export const configurazione = {
  testo: "S",

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

  // Colori ciclici
  if (i % 3 === 0) {
    fill("deeppink");
  } else if (i % 3 === 1) {
    fill("black");
  } else {
    fill("white");
  }

  // // QUADRATO che pulsa col volume
  // push();
  // translate(x, y);
  // rotate(frameCount * 2 + indice); // Rotazione continua
  // rectMode(CENTER);
  // let size = 10 + volume * 30;
  // rect(0, 0, size, size);
  // pop();

  // STELLA che si muove con angolo e volume
  push();
  translate(x, y);
  rotate(angolo + frameCount);
  stroke("white");
  strokeWeight(1);
  noFill();
  let r1 = 5 + volume * 20;
  let r2 = 10 + volume * 30;
  beginShape();
  for (let j = 0; j < 10; j++) {
    let angle = j * 36;
    let rad = j % 2 === 0 ? r2 : r1;
    let sx = cos(angle) * rad;
    let sy = sin(angle) * rad;
    vertex(sx, sy);
  }
  endShape(CLOSE);
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
  fill("white");
  disegnaTesto();
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
