Esercizio di oggi: *Carosello Array di Oggetti*
nome repo: *js-array-objects-carousel*

Creare un carosello. Se non avete fantasia potete copiare l'immagine allegata (è comprensiva di bonus).
Numero di push minimi: 10
Raccomandazione: seguite le milestone una per una. Ricordarsi/rivedere il live coding della mattina
può essere d'aiuto
*Milestone 0:*
Come visto a lezione, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
*Milestone 1:*
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
****
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
**Milestone 2:
Aggiungere il *ciclo infinito* del carosello.** Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

<!-- ---------------BONUS-------------- -->
*BONUS 1:*
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
*BONUS 2:*
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
*BONUS 3:*
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

<!-- -------------------------------------- -->


<!-- PSEUDO CODICE -->

1- creazione della struttura del markup statico x
1.1 creazione container principale x
1.2 creazione contenitore per l'mmagine grande x
1.3 creazione contenitore per le immagini piccole x

2-rendiamo la nostra pagina statica
2.1- realizziamo l'array di oggetti x
2.3-recupero gli elementi dal dom x


3.iteriamo l'array di immagini con il forEach  ``
4.creo una variabile indice per tenere traccia dell'immagine da visualizzare
5.recupero tutti gli elementi con classe active
6.assegno la classe d-none a tutti gli elementi con classe active
7.prendo il primo elemento dell'array card e rimuovo la classe d-none
8.inserisco le immagini all'elemento thumbs