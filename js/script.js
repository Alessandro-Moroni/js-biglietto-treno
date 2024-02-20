const chilometri = prompt('Quanti chilometri devi percorrere?');

const eta = prompt('Quanti anni hai?');

const costoChilometri = 0.21;

let costoBiglietto = chilometri * costoChilometri;


document.getElementById('user').innerHTML = `
<p>
Il costo del tuo biglietto è di ${costoBiglietto}€ e percorrerai ${chilometri} km.
</p>
`;

const scontoMinori = 20;

if(eta < 18) {
  costoBiglietto = (costoBiglietto / 20) ;
}
