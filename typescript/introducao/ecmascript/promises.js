"use strict";
//Callback
function esperar3s(callback) {
    setTimeout(() => {
        callback('3s depois...');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
//Convertendo para Promise -> necessita do motor ES6, alterar no tsconfig.json
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois Promise...');
        }, 3000);
    });
}
esperar3sPromise().then(dado => console.log(dado));
//Utilizando promise com chamada API
fetch('https://swapi.dev/api/people/1').then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title));
