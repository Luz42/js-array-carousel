console.log('JS-OK')

/*
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro:
avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente
servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima,
che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1,
ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva,
che quindi verrà visualizzata al posto della precedente.

Consigli del giorno:

1. Costruiamo del carosello una versione statica contenente solamente un'immagine.
Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi
per poterli riprodurre dinamicamente in js.
Potremo quindi usarli come "template".

2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare

3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"

*/


//è stata assegnata una variabile a ciascun bottone e successivamente la funzione
//in modo che sostituisca le classi e le immagini cambino
const nextButton = document.getElementById('next')
const previousButton = document.getElementById('previous')
//let activeImage

nextButton.addEventListener('click',
    function(){

        const activeElement = document.querySelector('.ae-active')

        const nextElement = activeElement.nextElementSibling

        if(nextElement){
        activeElement.classList.remove('ae-active')
        nextElement.classList.add('ae-active')
        
        // activeImage = document.querySelector('d-block')
        // console.log(activeImage)
        
    
        }

    }
);

previousButton.addEventListener('click',
    function(){

        const activeElement = document.querySelector('.ae-active')

        const previousElement = activeElement.previousElementSibling

        if(previousElement){
        activeElement.classList.remove('ae-active')
        previousElement.classList.add('ae-active')
        }

    }

);

/*
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente
servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima,
che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1,
ma costruito dinamicamente attraverso JavaScript.

*/


//creo l'array di immagini e seleziono il contenitore dove andranno inserite
const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg']
const containerHTML = document.getElementById('images-container')
START_IMAGE = 0
//con un ciclo, creo dinamicamente le immagini e le inserisco nell'HTML

for(let i = 0; i<images.length; i++){

    //se i === 0 (ovvero la prima)allora quell'immagine avrà 'ae-active' alrimenti ''

    const activeClass = i === START_IMAGE ? 'ae-active' : '';

    containerHTML.innerHTML += `<img class="img-fluid w-100 d-none ${activeClass}" src="${images[i]}" alt="${images[i]}">`

}

//le immagini sono state create dinamicamente allo stesso modo di quelle statiche, e gli eventi in ascolto (CLICK) funzionano ugualmente
//perchè vanno ad influenzare il codice generato (anche successivamente), siccome non vengono eseguite fino all'evento (CLICK)

//MILESTONE 3 ************* OK