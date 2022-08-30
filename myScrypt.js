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

nextButton.addEventListener('click',
    function(){
        
        const activeElement = document.querySelector('.img-fluid.w-100.d-block')
        const nextElement = activeElement.nextElementSibling

        if(nextElement){
        activeElement.classList.add('d-none')
        activeElement.classList.remove('d-block')
        nextElement.classList.remove('d-none')
        nextElement.classList.add('d-block')
        }

    }
);

previousButton.addEventListener('click',
    function(){
        
        const activeElement = document.querySelector('.img-fluid.w-100.d-block')
        const previousElement = activeElement.previousElementSibling

        if(previousElement){
        activeElement.classList.add('d-none')
        activeElement.classList.remove('d-block')
        previousElement.classList.remove('d-none')
        previousElement.classList.add('d-block')
        }
    }

);

const activeImage = document.querySelector('.ae-active').src
let bigActiveImage = document.querySelector('.ae-big-img').src

console.log(activeImage)
console.log(bigActiveImage)

bigActiveImage += activeImage

console.log(bigActiveImage)