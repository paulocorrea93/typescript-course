"use strict";
//125 de 133 - primeiro decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    console.log("Iniciando decorator.");
    return function (target, propertyKey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("Terminando execução do método.");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
//126 de 133 - multiplos decorators
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou A.");
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou B.");
    };
}
function c() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou C.");
    };
}
class MultipleDecorators {
    testing() {
        console.log("Terminando execução");
    }
}
__decorate([
    a(),
    b(),
    c()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
// 127 de 133 - class decorator
function classDecorator(constructor) {
    console.log(constructor.name);
    if (constructor.name === "User") {
        console.log("Criando usuário");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const paulo = new User("Paulo");
console.log(paulo);
//128 de 133 - decorator de método
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(true)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
//129 de 133 - Accessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `idade do monstro ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
//130 de 133 - Property decorator
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = () => {
            return value;
        };
        const setter = (newVal) => {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem);
// 131 de 133 - class decorator para inserir data de criação de objetos
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(33);
const newPen = new Pen(44);
console.log(newBook);
console.log(newPen);
// 132 de 133 - verificar se usuário pode ou não fazer alterações no sistema com decorator
function anotherPostValidation() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        // console.log(childFunction)
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("O usuário já postou.");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    anotherPostValidation()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro Post.", newPost.alreadyPosted);
newPost.post("Meu segundo Post.", newPost.alreadyPosted);
//133 de 133 - validação de número máximo de caracteres com decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O nome do usuário deve ter até ${limit} caracteres.`);
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "name", void 0);
const newUser01 = new Admin("Paulo");
const newUser02 = new Admin("PauloCorrea");
console.log(newUser01.name);
