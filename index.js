let numero = parseInt(prompt("Ingrese su edad:"));
/*
if (numero < 18){
    alert("no tenes permiso");
} else {
    
    if(numero > 21){
        alert("podes pasar");
    } else {
        alert("pedi permiso a tus padres");
    }
}

if (numero < 18){
    alert("no tenes permiso");
} else if(numero > 21){
        alert("podes pasar");
    } else {
        alert("pedi permiso a tus padres");
    }


if (numero < 18){
        alert("no tenes permiso");
    } else if(numero==18 || numero==19 ||(numero>=21)){
        alert("podes pasar");
    } else{
        alert("si sos de 20 años no podes pasar");
    }

*/
    let producto = parseInt(prompt("Ingrese codigo de producto:"));

    switch(producto){
        case 400:
            alert("el producto es el codigo 100");
            break;

        case 200:
            alert("el producto es el codigo 200");
            break;

        case 300:
            alert("el producto es el codigo 300");
            break;
        
        default:
            alert("producto de codigo incorrecto");
            break;
    }


// condicion ? "parte verdadera" : "parte falsa";

let resultado = numero >=18 ? alert("Es mayor de edad") : "Es menor de edad";

//Bucles FOR - WHILE - DO WHILE

for (let i=0; i<11; i++){
    console.log("El valor de i es: " + i);
}

while (producto == 100){
    console.log("repeti producto");
    producto = parseInt(prompt("Ingrese codigo de producto:"));
}

do {

    console.log("repeti producto");
    producto = parseInt(prompt("Ingrese codigo de producto:"));
} while (producto == 100);


/*let sephiroth = {
    id: 1,
    name: "Sephiroth",
    lastName: "Crescent",
    game: "Final Fantasy VII",
    loveInterest: "Aerith Gainsborough",
    family: {
        mothers:"Lucrezia Crescent",
        father: "Professor Hojo",
        hermanos: {
            hermano1: "kjhkjhkjhkjh",
            hermano2: "5jbjhvhjvjh"
        }
    },
    job: "Soldier First Class Shinra",
    alias: "One Winged Angel",
    weapon: "Masamune long samurai sword",
    typeVillain: "Ultimate Warrior"
};

console.log({sephiroth});

console.log(sephiroth.family.hermanos.hermano2);

console.log("Su padre es: " + sephiroth.family.father +"Su madre es: " + sephiroth.family.mothers);

//Operadores aritmeticos

let numero8= "50", numero9 = 50;

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

let asigMas = numero8;

//asigMas = asigMas +10;
asigMas += 10;
console.log(asigMas);

asigMas -= 10;
console.log(asigMas);

asigMas *= 10;
console.log(asigMas);

asigMas /= 10;
console.log(asigMas);

asigMas %= 10;
console.log(asigMas);

//operadores de comparacion

let mayorQue = numero8 !== numero9;
console.log(mayorQue);

//operadores de incremento o decremento

let numero10 =20;

numero10++;
++numero10;

console.log(numero10);

numero10--;
--numero10;

console.log(numero10);


//operadores logicos

// (&&) cumple ambos criterios

let resultado = (numero8 >= 3) && (numero8 <= 10) && (numero8 !=5);
console.log(resultado);

// (||) al menos 1 se cumpla
let resultado2 = (numero8 >= 3) || (numero8 <= 10) || (numero8 !=5);
console.log(resultado2);

// negacion

!resultado;


 console.log("hola");

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