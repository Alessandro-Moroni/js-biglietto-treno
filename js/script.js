const chilometri = prompt('Quanti chilometri devi percorrere?');

const eta = prompt('Quanti anni hai?');

const costoChilometri = 0.21;

let costoBiglietto = (chilometri * costoChilometri).toFixed(2);



if(eta < 18) {
  costoBiglietto = ((costoBiglietto / 100) * 80);
}
if(eta > 65) {
  costoBiglietto = ((costoBiglietto / 100) * 60);
}

document.getElementById('user').innerHTML = `
<p>
Il costo del tuo biglietto è di ${costoBiglietto}€ e percorrerai ${chilometri} km.
</p>
`;
