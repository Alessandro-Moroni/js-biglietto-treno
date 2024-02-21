let chilometri = prompt('Quanti chilometri devi percorrere?');

let eta = prompt('Quanti anni hai?');

const costoChilometri = 0.21;

let costoBiglietto = (chilometri * costoChilometri);



if(eta < 18) {
  costoBiglietto = ((costoBiglietto / 100) * 80);
}else if(eta > 65) {
  costoBiglietto = ((costoBiglietto / 100) * 60);
}

document.getElementById('user').innerHTML = `
<p>
Il costo del tuo biglietto è di ${costoBiglietto.toFixed(2)}€ e percorrerai ${chilometri} km.
</p>
`;
