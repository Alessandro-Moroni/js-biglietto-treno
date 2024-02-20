const chilometri = prompt('Quanti chilometri devi percorrere?');

const eta = prompt('Quanti anni hai?');

const costoChilometri = 0.21;

const costoBiglietto = chilometri * costoChilometri.toFixed(2);


document.getElementById('user').innerHTML = `
<p>
Il costo del tuo biglietto è di ${costoBiglietto}€ e percorrerai ${chilometri} km.
</p>
`;


