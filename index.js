// Eventos

// nodo.addEventListener("tipo de evento", callback);

const btn = document.querySelector("button");

function random(number){
    return Math.floor(Math.random()*(number +1));
}

btn.addEventListener("click", ()=>{
    const color = `rgb(${random(255)} ,${random(255)} , ${random(255)})`;
    document.body.style.backgroundColor = color;
    
});

const inputEntrada = document.querySelector("#texto");
const textoContenedor = document.querySelector("#pantalla");

inputEntrada.addEventListener("keydown", (e)=> (textoContenedor.textContent = `Usted escribió la letra: "${e.key}"`) )












/* let cualquiera = document.querySelector(".classNodo");
console.log(cualquiera);

let id = document.getElementById("idNodo");

let clase = document.getElementsByClassName("classNodo");

let name = document.getElementsByName("");



let tagDiv = document.getElementsByTagName("div");

//let li = createElement("li");

//ul.appendChild(li);

//let texto = createTextNode("Hola DOM")

//tagDiv.innerHTML = "<p>Hola</p>";

//clase.innerText = "Esto fue cambiado por JS";

//document.write = "Hola soy el write";

let ul = document.querySelector("ul");
let animales = ["gato", "perro", "conejo", "elefante", "caballo", "jirafa", "tigre", "ballena", "Pato"];

animales.forEach((animal)=>{
    const li = document.createElement("li");
    li.textContent = animal;
    ul.appendChild(li);
});

const frutas = ["Manzana", "Frutillas", "kiwi"];
const verduras = ["Zapallo", "Espinaca", "Brocoli", "papa", "tomate", "lechuga"];

console.log(frutas.length);

console.log(frutas[3]);

// agrega al final
frutas.push('Anana');
console.log(frutas.length);
console.log(frutas);

//agrega al incio
frutas.unshift('Anana');
console.log(frutas.length);
console.log(frutas);

//elimina el ultimo
frutas.pop();
console.log(frutas.length);
console.log(frutas);

//elimina el primero
frutas.shift();
console.log(frutas.length);
console.log(frutas);

//concatenar arrays

const productosDeVerduleria = frutas.concat(verduras);
console.log(productosDeVerduleria);

let separar = productosDeVerduleria.join("-");
console.log(productosDeVerduleria);


separar = separar.split("-");
console.log(separar);

console.log(productosDeVerduleria.slice(2, 4));

console.log(productosDeVerduleria.sort());

const numeros = [10, 5, 95, 250, 25];

console.log(numeros.sort());

console.log(numeros.sort((a,b)=> a-b));


let variable1 = parseInt(prompt("Ingresa el primer numero"));
let variable2 = parseInt(prompt("Ingresa el segundo numero"));

// declaracion

function sumar(variable1, variable2){
    //proceso
   // console.log("Esto es para sumar");
   // let variable1 = parseInt(prompt("Ingresa el primer numero"));
   // let variable2 = parseInt(prompt("Ingresa el segundo numero"));

    //let resultado = variable1 + variable2;

    return variable1 + variable2;
}

// llamado

let suma = sumar(variable1, 5);
//let suma2 = sumar();
console.log(suma*2);
//console.log("La suma de tus números es de= " +suma2);

// arrow function

//const nombreDeLaFuncion = () => {}

const sumar2 = (a, b) => {
    let resultado2 = a + b;
    console.log("La suma de tus números es de = " + resultado2);

    return resultado2;
}

let suma3 = sumar2(10, 5);
console.log(suma3);

// callbacks

const sumar3 = (a, b) => a+b;

let suma4 = sumar3(1000, 50);
console.log(suma4);


let numero = parseInt(prompt("Ingrese su edad:"));

if (numero < 18){
    alert("no tenes acceso");
} else {
    
    if (numero < 21){
        alert("tenes que pedir permiso a tus padres");
    } else {
        alert("tenes acceso");
    }
}

//else if

if (numero < 18){
    alert("no tenes acceso");
} else if (numero < 21){
        alert("tenes que pedir permiso a tus padres");
    } else if(numero > 60) {
        alert("no tenes acceso");
    } else {
        alert("tenes acceso");
    }


if (numero < 18 || numero == 20 || numero > 60){
    alert("no tenes acceso");
} else if(numero == 18 || numero == 19){
    alert("pedir permiso");
} else {
    alert("tenes acceso");
}


let producto = parseInt(prompt("Ingrese el codigo de producto:"));

switch (producto){
    case '100':
        alert("el producto es el codigo 100");
        break;

    case '200':
        alert("el producto es el codigo 200");
        break;

    case '300':
        alert("el producto es el codigo 300");
        break; 

    case '400':
        alert("el producto es el codigo 400");
        break;   
    
    default:
        alert("reingresa tu codigo correcto");
        break;
}

// condicion ? "parte verdadera" : "parte falsa";

let resultado = numero >= 18 ? numero*2 : "Es menor de edad";
console.log(resultado);

// FOR WHILE DO WHILE

for (let i=10; i>=0; i--){
    console.log("Numero " + i);
}

while(producto == 100){
    console.log("repeti producto");
    producto = parseInt(prompt("Ingrese el codigo de producto:"));
}

do{
    console.log("repeti producto");
    producto = parseInt(prompt("Ingrese el codigo de producto:"));
} while (producto == 100)


let sephiroth = {
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