// Comando Inicialização do Servidor: npm run dev

// Objetos

//document.body.innerText = ('name' in user) //Validar se existe uma chave no objeto

// document.body.innerText = Object.keys(user) //Retorna as chaves do objeto

// document.body.innerText = Object.values(user) //Retorna os valores das chaves do objeto

// document.body.innerText = Object.entries(user) //Retorna vetores contendo chaves e valores associados 

// Desestruturação = Remover parte do objeto para uma variável independente

//Ambas as linhas retornam o mesmo resultado
// const address =  user.address
// const {address, idade: age, nickname = 'Fernandes'} = user

// document.body.innerText = JSON.stringify({address, age, nickname})

//Rest ou Resto

// const { name, idade, ...rest } = user
// const array = [1,2,3,4,5,6,7,8,9,10]

// // Desestruturação
// // const first = array[0];
// const [first, second, ...restante] = array

// const [primeiro, , terceiro, ...todoResto] = array

// const nome = 'Diego';
// const idade = 27;

// const user = {
//   nome,
//   idade,
// };


// A sintaxe abaixo produz o mesmo resultado que a sintaxe acima  
// const user = {
//   nome: nome,
//   idade: idade,
// };


// Optional Chaining

// const user = {
//   name: 'Diego',
//   age: 27,
//   address:{
//     street: 'Rua Teste',
//     number: 176,
//     zip: {
//       code: '89160000',
//       city: 'Rio do Sul'
//     },
//     showFullAddress(){
//       return 'ok';
//     }
//   },
// };

// Métodos de Array

const array = [1,2,3,4,5];
// const novoArray = array.filter(item => item % 2 == 0).map(item => item * 10)

// every() = Testa se todos os itens passam na codição e retorna o bool
// some() = Testa se pelo menos um item passam na codição e retorna o bool

// const todosItensSaoNumeros = array.every(item => {
//   return typeof item == 'number';
// })

// const peloMenosUmNaoNumero = array.some(item => {
//   return typeof item != 'number';
// })

const soma = array.reduce((acc, item) => {
  return acc + item
},0)

document.body.innerText = JSON.stringify(soma)