//Callback
function esperar3s(callback :(dado:string)=>void){
    setTimeout(()=>{
        callback('3s depois...')
    },3000)
}
esperar3s(function(resultado:string){
    console.log(resultado)
})

//Convertendo para Promise -> necessita do motor ES6, alterar no tsconfig.json, caso não tenha conseguido realizar a promise, usa-se o reject apra pegar o error
function esperar3sPromise(){
    return new Promise((resolve:any)=>{
        setTimeout(()=>{
            resolve('3s depois Promise...')
        },3000)
    })
}

esperar3sPromise().then(dado => console.log(dado))


//Utilizando promise com chamada API, transformando em json e pegando um único filme
fetch('https://swapi.dev/api/people/1').then
(res => res.json())
.then(personagem => personagem.films)
.then(films => fetch(films[0]))
.then(resFilm => resFilm.json())
.then(filme => console.log(filme.title))
