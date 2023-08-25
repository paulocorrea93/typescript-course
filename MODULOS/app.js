"use strict";
//116 de 122 - importando arquivos
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greeting_js_1 = __importDefault(require("./greeting.js"));
(0, greeting_js_1.default)();
//117 de 122 - importando variáveis
const variable_js_1 = require("./variable.js");
console.log(variable_js_1.x);
//118 de 122 - multiplas importações
const multiple_js_1 = require("./multiple.js");
console.log(multiple_js_1.a);
console.log(multiple_js_1.b);
(0, multiple_js_1.myFunction)();
//119 de 122 alias de importação
const changeName_js_1 = require("./changeName.js");
console.log(changeName_js_1.changeName);
