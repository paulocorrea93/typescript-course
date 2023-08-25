//116 de 122 - importando arquivos

import greeting from './greeting.js'

greeting()

//117 de 122 - importando variáveis

import {x} from './variable.js'

console.log(x)

//118 de 122 - multiplas importações

import {a, b, myFunction} from './multiple.js'

console.log(a)
console.log(b)

myFunction()

//119 de 122 alias de importação

import {changeName as name} from './changeName.js'

console.log(name)