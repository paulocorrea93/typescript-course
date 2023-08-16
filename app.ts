// TIPOS DE VARIÁVEIS SIMPLES

let variable = "hello";

variable = "hi";

let age = 30;

let ageWithType: number;

ageWithType = 30;

let testString: string;

testString = "hello";

let testBoolean: boolean;

testBoolean = true;

// TIPOS DE VARIÁVEIS COMPOSTOS

let stringOrNumber: string | number;

stringOrNumber = 12;

stringOrNumber = "paulo";

// ARRAY

let names = ["paulo", "gabriel", "barros"];

names.push("correa");

// names.push(2) ERRO

let numbers = [1, 2, 3];

numbers.push(4);

// numbers.push("paulo") ERRO

//  ARRAYS COM TIPOS

let testStringArray: string[];

// testStringArray = [1, 2, 3] ERRO

testStringArray = ["paulo", "correa"];

let testNumberArray: number[];

testNumberArray = [1, 2, 2];

// TIPOS DE ARRAYS COMPOSTOS

let testStringOrNumberArray: (string | number)[];

testStringOrNumberArray = [1, "dois", 3, "quatro"];

// OBJECT

let user = {
  username: "paulo",
  age: 30,
  isAdmin: true,
};

user.username = "gabriel";
user.age = 29;
user.isAdmin = false;

let userObj: {
  userName: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  userName: "Gabriel",
  age: 28,
  isAdmin: true,
};

let userObj2: {
  userName: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  userName: "jhon",
  age: 33,
  isAdmin: false,
  phone: "+5592123412349",
};

// ANYTYPE

let anyTest;

anyTest = 12;
anyTest = "paulocorrea";
anyTest = true;
anyTest = [];
anyTest = {};

let testAnyArray: any[];

testAnyArray = [1, "dois", true];

// FUNCTIONS

let testFunction = () => {
  console.log("hi, welcome");
};

let functionType = (): string => {
  // console.log("paulo") ERRO
  return "Paulo";
};

let multiple = (num: number) => {
  return num * 2;
};

let sum = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};

sum(2, 3, 4);

// TYPE ALIASES

type UserType = {
  username: string;
  age: number;
  phone?: string;
};

let testUser = (user: UserType) => {
  console.log(user.age);
};

// FUNCTION ASSIGNATURE

type myFunction = (a: number, b: string) => void;

let write: myFunction = (str, num) => {
  console.log(num + "test" + str);
};

type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "light" | "dark";
};

const userWithTheme: UserType2 = {
  username: "paulo",
  age: 30,
  // theme: "pink" ERRO
  theme: "dark",
};

// INTERFACES

interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  username: "paulo",
  email: "paulo@gmail.com",
  age: 30,
  employeeId: 1,
};
const client: IUser = {
  username: "paulo",
  email: "paulo@gmail.com",
  age: 30,
};

// TOPICOS GERAIS DE TYPESCRIPT

interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<String> = {
  id: 2,
  title: "titulo",
  desc: "descrição",
  extra: ["palavra1", "palavra2"],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostEvenBetter<{ id: number; usernmae: string }> = {
  id: 3,
  title: "titulo 2",
  desc: "descrição 2",
  extra: [{ id: 4, usernmae: "paulo" }],
};

const testMe3: IPostEvenBetter<ICategory> = {
  id: 5,
  title: "titulo 3",
  desc: "descrição 4",
  extra: [{id: 7, title: "titulo 7"}]
}