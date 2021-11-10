//console.log('ciao');

var generaBtn = document.getElementById('genera');
var annullaBtn = document.getElementById('annulla');
var costo = 0.21;
var costoTotale = 0;
var nulla = 0;

generaBtn.addEventListener('click', function () {
    
    //gestione nome e stampa in passeggero html
    var name = document.getElementById('name').value;
    document.getElementById('passeggero').innerHTML = name;
    
    //gestione distanza
    var distanza = parseInt(document.getElementById('distanza').value);
    
    //gestione fascia d'età
    var eta = document.getElementById('eta').value;
    
    //controllo immissione corretta dei dati e calcolo prezzo con eventuali sconti
    if (name != '' && distanza > 0 && eta != '') {  //controllo      
        costoTotale = (distanza * costo).toFixed(2);

        // blocco else if per sconto
        if (eta == 1) { //minorenne
            var sconto = costoTotale * 0.2;
            costoTotale = (costoTotale - sconto).toFixed(2);

            //stampa offerta in html
            document.getElementById('offerta').innerHTML = 'Sconto del 20%';

        } else if (eta == 3) { //over 65
            var sconto = costoTotale * 0.4;
            costoTotale = (costoTotale - sconto).toFixed(2);

            //stampa offerta in html    
            document.getElementById('offerta').innerHTML = 'Sconto del 40%';
        } else {
            document.getElementById('offerta').innerHTML = '-';
        }

        //costoTotale stampa in html
        document.getElementById('costo_totale').innerHTML = costoTotale + ' €';

        //calcolo random codice cp e stampa in html
        var cp = Math.floor(Math.random() * (100000 - 90000)) + 90000;
        document.getElementById('codCp').innerHTML = cp;

        //calcolo random carrozza
        var carrozza = Math.floor(Math.random() * 10 + 1);
        document.getElementById('carrozza').innerHTML = carrozza;

    } else {
        var errore = alert('Errore nella compilazione dei dati!')
    }
});

annullaBtn.addEventListener('click', function () {
    var pulisci = document.getElementById;

    pulisci('passeggero').innerHTML = nulla;
    pulisci('offerta').innerHTML = nulla;
    pulisci('carrozza').innerHTML = nulla;
    pulisci('codCp').innerHTML = '';
    pulisci('costo_totale').innerHTML = nulla;
    
});