/* Christian Urff · CC BY 3.0 */
'use strict';
const el = id => document.getElementById(id);
const family = el('family');
const style = el('style');
const size = el('size');
const sample = el('sample');
const output = el('output');
const status = el('font-status');
let manifest = [];
let renderNumber = 0;
const texts = {
  book: 'Mila und Ben gehen in den Garten. Unter dem Baum liegt ein roter Ball. Wer hat ihn wohl dort vergessen?\n0123456789 · 7 · 8 = 56 · 12 : 3 = 4',
  math: '12,50+2,25=14,75\n7*8=56\n12:3=4\n3-2=1\n0123456789',
  letters: 'Aa Bb Dd Ee Mm Nn Uu\nä ö ü ß\nMila Oma Baum',
  digits: '0123456789\n1,5+2,5=4,0\n12:3=4'
};
function selectedFace() { return manifest.find(r => r.family === family.value && r.style === style.value); }
async function render() {
  const id = ++renderNumber;
  const face = selectedFace();
  if (!face) return;
  el('size-label').textContent = size.value + ' px';
  output.style.fontFamily = '"' + face.family + '", sans-serif';
  output.style.fontWeight = face.weight;
  output.style.fontStyle = face.cssStyle;
  output.style.fontSize = size.value + 'px';
  output.textContent = sample.value;
  status.textContent = 'Schrift wird geladen …';
  try {
    const loaded = await document.fonts.load(`${face.cssStyle} ${face.weight} 32px "${face.family}"`);
    if (id !== renderNumber) return;
    status.textContent = loaded.length ? `${face.family} · ${face.style} · ${face.designVersion} · ${face.license} · Webfont geladen.` : 'Die Schrift konnte nicht geladen werden.';
  } catch (_) {
    if (id === renderNumber) status.textContent = 'Die Schrift konnte nicht geladen werden. Bitte die Verbindung prüfen.';
  }
}
function exampleText() {
  const exercise = / (Spur|Start)$/.test(family.value);
  const math = family.value.includes('Rechnen');
  sample.value = exercise ? (math ? texts.digits : texts.letters) : (math ? texts.math : texts.book);
  size.value = exercise ? 76 : 36;
}
function chooseFamily() {
  const faces = manifest.filter(r => r.family === family.value).sort((a,b) => a.weight - b.weight || Number(a.cssStyle === 'italic') - Number(b.cssStyle === 'italic'));
  style.replaceChildren(...faces.map(face => {
    const option = document.createElement('option');
    option.value = face.style;
    option.textContent = face.style.replace('Italic', ' Kursiv').trim();
    return option;
  }));
  style.value = 'Regular';
  exampleText();
  render();
}
family.addEventListener('change', chooseFamily);
style.addEventListener('change', render);
size.addEventListener('input', render);
sample.addEventListener('input', render);
el('reset').addEventListener('click', () => { exampleText(); render(); });
fetch('MANIFEST.json?v=1.0.1').then(response => {
  if (!response.ok) throw new Error('Manifest unavailable');
  return response.json();
}).then(data => { manifest = data; chooseFamily(); }).catch(error => {
  console.error('Avela: Schriftliste konnte nicht geladen werden.', error);
  output.textContent = sample.value;
  status.textContent = 'Die Auswahl konnte nicht geladen werden. Bitte die Seite über einen Webserver öffnen.';
});
