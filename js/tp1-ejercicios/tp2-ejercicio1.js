//crear tablas o matrices con bucles anidados
//````
const filas = parseInt(prompt("Ingrese las filas"));
const columnas = parseInt(prompt("Ingrese las columnas"));
let totalCeldas = filas * columnas;
document.write(`<table><tbody>`);
for (let i = 0; i < filas; i++) {
  document.write(`<tr>`);
  for(let j =0 ; j<columnas ; j++){
    document.write(`<td>${totalCeldas}</td>`);
    totalCeldas--;
  }
  document.write(`</tr>`);
}
document.write(`</tbody></table>`);
