console.log("hola");

let nombreVariable = "Hola JS";
console.log(nombreVariable);

let nombreVariable2 = ", bienvenido a JS";
console.log(nombreVariable2);

let numero = 5;
console.log(nombreVariable+nombreVariable2);

let numero2, numero3, numero4 =5;

/*
let numero2;
let numero3;
let numero4 = 5;
*/

console.log(numero2);

let objetoUsuario = {
    nombre: "Matias",
    apellido: "Flores",
    edad: 41,
    carrera: "Tec. en desarrollo web"
};

console.log({objetoUsuario});

objetoUsuario.nombre = "gise";

console.log(objetoUsuario.nombre);

const PI = 3.14;
const TEXTO = "hola";

console.log(PI*objetoUsuario.edad);

console.log(TEXTO + " " + objetoUsuario.nombre + " " + objetoUsuario.apellido);

let dato = parseInt(prompt("Ingrese su edad"));

console.log(dato);

let dato2 = "Hola como estas?";

console.log(dato2.length);

console.log(dato2.toUpperCase());

console.log(dato2.repeat(2));

console.log(dato2.replace(numero, numero4));

alert("chau chicos hasta la proxima");

