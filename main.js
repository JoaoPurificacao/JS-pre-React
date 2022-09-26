// Promises
    // .then/ .catch 

// const somaDoisNumeros = (a,b) =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a+b);
//         }, 2000);
//     });
// } 

// somaDoisNumeros()
//     .then(soma => {document.body.innerText = soma}) //Caso dê tudo certo
//     .catch(err => {console.log(err)}) //Caso dê tudo errado
//     .finally(()=>{}) //Executa no final, independente de dar certo ou errado

//Primeira Sintaxe
fetch('https://api.github.com/users/joaopurificacao')
.then(response => {
    return response.json();
})
.then(body => {
    console.log(body)
})
.catch(err => {
    console.log(err)
})
.finally(()=>{
    console.log('Finalizou')
})

//Segunda Sintaxe
async function buscaUsuario(){
    try{
        const response = await fetch('https://api.github.com/users/heldermeyer');
        const body = await response.json();
        // console.log(body);
        return body.name
    }catch(err){
        console.log(err);
    }finally{
        console.log('Finalizou pela segunda vez')
    }
    
}

buscaUsuario().then(nome => {
    console.log(nome);
})