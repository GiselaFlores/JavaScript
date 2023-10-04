let sephiroth = {
    id: 1,
    name: "Sephiroth",
    lastName: "Crescent",
    game: "Final Fantasy VII",
    loveInterest: "Aerith Gainsborough",
    family: {
        mothers:"Lucrezia Crescent",
        father: "Professor Hojo"
    },
    job: "Soldier First Class Shinra",
    alias: "One Winged Angel",
    weapon: "Masamune long samurai sword",
    typeVillain: "Ultimate Warrior"
};

console.log({sephiroth});

console.log("Su padre es: " + sephiroth.family.father + " " +"Su madre es: " + sephiroth.family.mothers);

//alert("Su padre es: " + sephiroth.family.father + " " +"Su madre es: " + sephiroth.family.mothers)

//Operadores aritmeticos
let numero8 = 50, numero9 = 2;

let suma = numero8 + numero9;
console.log(suma);

let resta = numero8 - numero9;
console.log(resta);

let multiplicacion = numero8 * numero9;
console.log(multiplicacion);

let division = numero8 / numero9;
console.log(division);

let resto = numero8 % numero9;
console.log(resto);

//Operadores de asignacion
//let asignoMas = numero8 + 10;

let asignoMas = numero8;

//asignoMas = asignoMas + 10;
asignoMas += 10;
console.log(asignoMas);

asignoMas -= 10;
console.log(asignoMas);

asignoMas *= 10;
console.log(asignoMas);

asignoMas /= 10;
console.log(asignoMas);

asignoMas %= 10;
console.log(asignoMas);

//Operadores comparacion

let mayorQue = numero8 > numero9;
console.log(mayorQue);

let menorQue = numero8 < numero9;
console.log(menorQue);

let mayorIgualQue = numero8 >= numero9;
console.log(mayorIgualQue);

let menorIgualQue = numero8 <= numero9;
console.log(menorIgualQue);

let igualQue = "10" == 10;
console.log(igualQue);

let diferenteQue = "10" != 10;
console.log(diferenteQue);

let igualesQue = "10" === 10;
console.log(igualesQue);

let diferenteesQue = "10" !== 10;
console.log(diferenteesQue);

//operadores de incremento y decremento

let numero10 = 20;

numero10++;
++numero10;

console(numero10);

numero10--;
--numero10;

console(numero10);


//operadores logicas

// (&&) se cumpla ambos criterios

let resultado = (numero8 > 3) && (numero8 <= 10); 

// (||)   se cumpla uno solo pero no todos

let resultado2 = (numero9 > 3) || (numero8 <= 10); 

// negacion

!resultado;


/* console.log("hola");

let nombreVariable = "Hola chicos";
console.log(nombreVariable);

let nombreVariable2 = "32";
console.log(nombreVariable2);

let numero = 5;
console.log(nombreVariable + nombreVariable2);

let numero2, numero3, numero4 = 5;



let numero2;
let numero3;
let numero4 = 5;



console.log(numero2);

numero2 = 10;

console.log(numero2);


let nula = null;

let objetoUsuario = {
    nombre:"Matias",
    apellido: "Flores",
    edad: 41,
    carrera: "tec. en desarrollo web"
};

console.log({objetoUsuario});

objetoUsuario.nombre = "Gise";

console.log(objetoUsuario.nombre);

const PI = 3.14;
const TEXTO = "hola";

console.log(PI*objetoUsuario.edad);

console.log(TEXTO + " " + objetoUsuario.nombre + " " + objetoUsuario.apellido);

let dato = parseInt(prompt("Ingrese su edad"));

console.log(dato);

console.log(objetoUsuario.carrera.length);

console.log(objetoUsuario.carrera.toUpperCase());

console.log(objetoUsuario.carrera.repeat(3));

alert("Tu edad es de: " + objetoUsuario.edad );*/