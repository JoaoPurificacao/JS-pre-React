//ES Modules

// Named Export
    // import {soma, sub} from './lib/math'
    // console.log(soma(1,2))
    // console.log(sub(5,2))

    import {soma as sum} from './lib/math' //Mudando o nomes após a importação
    console.log(sum(1,2))
    // console.log(sub(5,2))

// import * as math from './lib/math' // Importa todo o arquivo como um objeto
// console.log(math.PI)